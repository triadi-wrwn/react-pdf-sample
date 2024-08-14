import { Document, Page, Text, View } from '@react-pdf/renderer';
import { Sample3Data } from '../pages/sample3';
import styles from '@/styles/sample3.styles';

const Sample3Template = (props: { data: Sample3Data }) => {
  const { data: {eventTitle, description, eventLocation, invitees} } = props;
  return (
    <Document>
      <Page style={styles.body}>
        <View style={{ width: 'auto' }}>
          <View style={styles.headerTitleContainer}>
            <View style={styles.headerTitle}>
              <Text>Nama acara</Text>
            </View>
            <View style={styles.headerGap}>
              <Text>:</Text>
            </View>
            <View style={styles.headerValue}>
              <Text>{eventTitle}</Text>
            </View>
          </View>
          <View style={styles.headerTitleContainer}>
            <View style={styles.headerTitle}>
              <Text>Lokasi</Text>
            </View>
            <View style={styles.headerGap}>
              <Text>:</Text>
            </View>
            <View style={styles.headerValue}>
              <Text>{eventLocation}</Text>
            </View>
          </View>
          <View style={styles.headerTitleContainer}>
            <View style={styles.headerTitle}>
              <Text>Keterangan</Text>
            </View>
            <View style={styles.headerGap}>
              <Text>:</Text>
            </View>
            <View style={styles.headerValue}>
              <Text>{description}</Text>
            </View>
          </View>
        </View>
        <View style={styles.docTitle}>
          <Text>ABSENSI</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1Header}>
              <Text style={styles.tableCellHeader}>No.</Text>
            </View>
            <View style={styles.tableCol2Header}>
              <Text style={styles.tableCellHeader}>Nama</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>TTD</Text>
            </View>
          </View>
          {invitees?.map((row) => (
            <View key={row.id} style={styles.tableRow}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>{row.id + 1}</Text>
              </View>
              <View style={styles.tableCol2}>
                <Text style={styles.tableCell}>{row.name}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}></Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Sample3Template;
