import { useNavigate } from 'react-router-dom';
import { Button, Card } from '@pong/common-ui';
import { ResultForm } from '../../components/result-form';

export function LogPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sm:hidden mb-3 flex">
        <Button onClick={() => navigate('/')}>Back</Button>
      </div>

      <Card title="Add result">
        <ResultForm />
      </Card>
    </>
  );
}
