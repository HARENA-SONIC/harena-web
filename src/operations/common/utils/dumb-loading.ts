export function dumbLoading(action: () => void, duration = 250) {
  setTimeout(() => {
    action();
  }, duration);
}
