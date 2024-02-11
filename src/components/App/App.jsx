import css from './App.module.css';

// From data folder
import user from '../../data/user.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

// From components folder
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <div className={css.container}>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          image={user.avatar}
          stats={user.stats}
        />
        <FriendList friendsData={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}

export default App;
