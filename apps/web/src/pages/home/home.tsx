import { useNavigate } from 'react-router-dom';
import { Button, Card } from '@pong/common-ui';
import { RankingsTable } from '@pong/ladder';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="sm:hidden mb-3 flex">
        <Button onClick={() => navigate('/log')}>Add result</Button>
      </div>

      <Card title="Leaderboard">
        <RankingsTable />
      </Card>
    </div>
  );
}
