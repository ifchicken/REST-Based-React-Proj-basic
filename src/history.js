// create own history object, not use react router bc we need to do programmatic navigation
// and it's hard for react router to pass history to action

// history package install auto with react router-dom
import createHistory from 'history/createBrowserHistory';

export default createHistory();
