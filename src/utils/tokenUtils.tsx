export const getUserNameFromToken = (token: string): string | null => {
  try {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    return tokenPayload.name;
  } catch (error) {
    return null;
  }
};
