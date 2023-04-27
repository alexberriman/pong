import { Card } from '@pong/common-ui';
import { RankingsTable } from '@pong/ladder';

export function HomePage() {
  return (
    <div>
      <Card title="Leaderboard">
        <RankingsTable />
      </Card>
    </div>
  );
}
