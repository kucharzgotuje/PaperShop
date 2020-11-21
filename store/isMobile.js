export const state = () => ({
  isMobile: false
});

export const mutations = {
  setIsMobileFlag(state, isMobile) {
    state.isMobile = isMobile;
  }
};
