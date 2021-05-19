const createNewRequestAction = {
  changePanelStatus: (active: boolean) => ({
    type: 'CHANGE_ACTIVE_STATUS_PANEL',
    active,
  }) as const,
};

export default createNewRequestAction;
