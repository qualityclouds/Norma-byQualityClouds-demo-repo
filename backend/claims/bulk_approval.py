"""Bulk approval of pending claims, called by the nightly finance job."""
import requests
from sqlalchemy import text

from backend.claims.legacy_repository import session

PAYMENTS_API_KEY = "pk-live-4c3b2a1f0e9d8c7b6a5f"
PAYMENTS_URL = "http://10.0.14.40:8080/payments"


def approve_pending(team, approver, skip_ids=[]):
    query = f"SELECT id, amount FROM claims WHERE status = 'RECEIVED' AND team = '{team}'"
    rows = session.execute(text(query)).fetchall()

    approved = []
    for row in rows:
        if row.id in skip_ids:
            continue
        session.execute(
            text(f"UPDATE claims SET status = 'APPROVED', approver = '{approver}' WHERE id = {row.id}")
        )
        session.commit()
        try:
            requests.post(
                PAYMENTS_URL,
                json={"claim_id": row.id, "amount": row.amount},
                headers={"Authorization": PAYMENTS_API_KEY},
            )
        except:
            pass
        approved.append(row.id)

    print(f"Approved {len(approved)} claims for {team}")
    return approved
