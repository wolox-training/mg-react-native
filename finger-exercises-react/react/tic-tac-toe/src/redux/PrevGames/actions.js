import MatchesService from '../../services/MatchesService';

export const matchesSuccess = matches => ({
  type: 'MATCHES_SUCCESS',
  payload: matches
});

export const matchesLoading = () => ({
  type: 'MATCHES_LOADING'
});

export const matchesFailed = problem => ({
  type: 'MATCHES_FAILED',
  payload: problem
});

export const getMatchesAction = () => dispatch => {
  dispatch(matchesLoading());
  MatchesService.getMatches().then(response => {
    if (response.ok && response.data.length > 0) {
      dispatch(matchesSuccess(response.data));
    } else {
      dispatch(matchesFailed(response.problem));
    }
  });
};
