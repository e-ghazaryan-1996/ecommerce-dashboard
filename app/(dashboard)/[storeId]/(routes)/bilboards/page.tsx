import { BilboardClient } from '@/components/bilboards/client';

const BillboardsPage = () => {
  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BilboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;