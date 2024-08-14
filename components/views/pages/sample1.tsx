'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Sample1Template from '../templates/sample1Template';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFViewer), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink), {
  ssr: false,
});

const Sample1 = () => {
  return (
    <div className='flex flex-col justify-center items-end gap-4 w-10/12 h-[75vh] mx-auto my-10'>
      <Button variant='default' asChild>
        <PDFDownloadLink document={<Sample1Template />} fileName='Sample1.pdf'>
          Download
        </PDFDownloadLink>
      </Button>
      <PDFViewer width={'100%'} height={'100%'} showToolbar={false}>
        <Sample1Template />
      </PDFViewer>
    </div>
  );
}

export default Sample1;
