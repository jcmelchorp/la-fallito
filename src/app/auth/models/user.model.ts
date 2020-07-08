export interface User {
  uid: string;
  displayName: string;
  email: string;
  providerId: string;
  photoUrl: string;
  isNewUser?: boolean;
  isTeacher?: boolean;
  isStudent?: boolean;
  isParent?: boolean;
  isAdmin?: boolean;
  isOnline?: boolean;
}
