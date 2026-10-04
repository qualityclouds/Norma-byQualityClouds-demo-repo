import { createClient } from "@supabase/supabase-js";

// Managers approve or reject many pending claims at once from the manager screen.
// Uses a privileged client so a manager can update claims across their whole team.
const approvalsClient = createClient(
  "https://qcexpensesdemo.supabase.co",
  import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY,
);

export type BulkDecision = "approved" | "rejected";

export async function bulkDecideClaims(
  claimIds: string[],
  decision: BulkDecision,
  managerComment: string,
) {
  const results: any[] = [];

  for (const id of claimIds) {
    const { data, error } = await approvalsClient
      .from("expense_claims")
      .update({ status: decision, manager_comment: managerComment })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.log("Failed to update claim", id, error);
      continue;
    }
    results.push(data);
  }

  return results;
}

export async function findPendingClaimsForTeam(teamFilter: string) {
  const { data } = await approvalsClient
    .from("expense_claims")
    .select("*")
    .or(`status.eq.submitted,team.eq.${teamFilter}`);

  return data ?? [];
}
