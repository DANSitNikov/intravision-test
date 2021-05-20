const choosePersonAction = {
  changeStatus: (status: boolean) => ({
    type: 'CHANGE_STATUS',
    status,
  }) as const,
  setName: (name: string) => ({
    type: 'SET_NAME',
    name,
  }) as const,
};

export default choosePersonAction;
