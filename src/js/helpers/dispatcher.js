const dispatcher = {
    handleAction: null,
    register(handleAction) {
        this.handleAction = handleAction;
    },
    dispatch(action) {
        this.handleAction(action);
    }
};
export default dispatcher;
