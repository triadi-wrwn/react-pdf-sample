'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Form2 from '@/components/views/contents/form2';
import Sample2Template from '../templates/sample2Template';
import Form3 from '../contents/form3';
import Sample3Template from '../templates/sample3Template';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFViewer), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export type Sample3Data = {
  eventTitle: string;
  eventLocation: string;
  description: string;
  invitees: {
    id: number;
    name: string;
  }[];
};
const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink), {
  ssr: false,
});

const Sample3 = () => {
  const [data, setData] = useState<Sample3Data>({
    eventTitle: 'Sharing Session Frontend Agustus 2024',
    eventLocation: 'Meeting Room 2',
    description:
      'Harap membawa makanan sendiri',
    invitees: [
      {id: 0, name: 'Krisna'}
    ]
  });

  return (
    <ResizablePanelGroup direction='horizontal' className='w-full'>
      <ResizablePanel defaultSize={30}>
        <div className='flex items-center justify-center p-6'>
          <span className='font-semibold'>Sample Dynamic Content</span>
        </div>
        <Form3 data={data} onChange={(value) => setData(value)} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        <div className='flex flex-col justify-center items-center gap-4 w-10/12 h-[75vh] mx-auto my-10'>
          <div className='flex justify-end w-full'>
            <Button variant='default' asChild>
              <PDFDownloadLink document={<Sample3Template data={data} />} fileName='Sample1.pdf'>
                Download
              </PDFDownloadLink>
            </Button>
          </div>
          <PDFViewer width={'100%'} height={'100%'} showToolbar={false}>
            <Sample3Template data={data} />
          </PDFViewer>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Sample3;
