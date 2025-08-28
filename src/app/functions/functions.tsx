export default function delayForDemo<T>(
  promise: Promise<{ default: T }>
): Promise<{ default: T }> {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
