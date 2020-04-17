export function requestReload(status) {
  return {
    type: '@reload/RELOAD_REQUEST',
    payload: { status },
  };
}
