export interface Repository {
  name: string;
  nameWithOwner: string;
  description: string;
  isPrivate: boolean;
  defaultBranchRef: Ref;
  parent: ParentRepository | null;
  url: string;
}

export interface ParentRepository {
  nameWithOwner: string;
  url: string;
}

export interface Ref {
  name: string;
}
