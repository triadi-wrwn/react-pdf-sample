'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Quixote from './sample1';

import dynamic from "next/dynamic";
import { Button } from '@/components/ui/button';
import Form1 from './form1';
import { useState } from 'react';

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
export type Sample1Data = {
  title: string;
  subtitle: string;
  description: string;
}
const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink), {
  ssr: false,
});

export default function Home() {
  const [data, setData] = useState<Sample1Data>({
    title: 'Test judul ',
    subtitle: 'Sub judul',
    description: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas con sus pantuflos de lo mismo, los días de entre semana se honraba con su vellori de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años, era de complexión recia, seco de carnes, enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna diferencia en los autores que deste caso escriben), aunque por conjeturas verosímiles se deja entender que se llama Quijana; pero esto importa poco a nuestro cuento; basta que en la narración dél no se salga un punto de la verdad',
  });

  return (
    <div className='h-screen w-10/12 mx-auto py-12'>
      <ResizablePanelGroup direction='horizontal' className='w-full h-screen rounded-lg border'>
        <ResizablePanel defaultSize={30}>
          <div className='flex items-center justify-center p-6'>
            <span className='font-semibold'>Sample 1</span>
          </div>
          <Form1 data={data} onChange={(value) => setData(value)} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <div className='flex flex-col justify-center items-end gap-4 h-screen w-10/12 mx-auto my-10'>
          <Button variant='default' asChild>
            <PDFDownloadLink document={<Quixote data={data} />} fileName='Sample1.pdf'>
              Download
            </PDFDownloadLink>
          </Button>
          <PDFViewer width={'100%'} height={'100%'} showToolbar={false}>
              <Quixote data={data} />
            </PDFViewer>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
