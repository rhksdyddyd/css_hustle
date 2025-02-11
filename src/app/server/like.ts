import 'server-only';

const isLiked = [false, false, false];

export function getIsLiked(idx: number): boolean {
  return isLiked[idx];
}

export function toggleIsLiked(idx: number): void {
  isLiked[idx] = !isLiked[idx];
}
