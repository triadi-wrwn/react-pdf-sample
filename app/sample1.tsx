'use client';

import { styles } from '@/styles/sample1.styles';
import { Page, Text, Image, Document } from '@react-pdf/renderer';
import { Sample1Data } from './page';

const Quixote = (props: { data: Sample1Data }) => {
  const { data } = props;
  return (
    <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
        <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.subtitle}</Text>
      <Image style={styles.image} src='images/quijote1.jpg' />
      <Text style={styles.text}>
       {data.description}
      </Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
    </Page>
 </Document>
 )
};

export default Quixote;