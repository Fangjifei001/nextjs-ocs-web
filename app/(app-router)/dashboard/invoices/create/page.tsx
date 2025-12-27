import Form from '@/app/(app-router)/ui/invoices/create-form';
import Breadcrumbs from '@/app/(app-router)/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/(app-router)/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}