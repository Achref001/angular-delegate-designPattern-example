export interface ServiceGitUsersDelegate {
  successOperation?(status: number): Function;

  failedOperation?(status: number): Function;
}
