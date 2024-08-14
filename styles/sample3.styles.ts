import { StyleSheet } from '@react-pdf/renderer';

const BORDER_COLOR = '#bfbfbf';
const BORDER_STYLE = 'solid';
const COL1_WIDTH = 5;
const COL2_WIDTH = 70;
const COLN_WIDTH = (100 - COL1_WIDTH - COL2_WIDTH);

const styles = StyleSheet.create({
  body: {
    padding: 30
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableCol1Header: {
    width: COL1_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol2Header: {
    width: COL2_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColHeader: {
    width: COLN_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol1: {
    width: COL1_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    textAlign: 'center'
  },
  tableCol2: {
    width: COL2_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    textAlign: 'left'
  },
  tableCol: {
    width: COLN_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tableCell: {
    margin: 5,
    fontSize: 11
  },
  title: {
    fontSize: 14,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center'
  },
  subtitle2: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20
  },
  footer: {
    fontSize: 11,
    textAlign: 'left',
    fontStyle: 'italic',
    marginTop: 20
  },
  headerTitleContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    gap: '10px',
    fontSize: 12,
    marginBottom: '5px'
  },
  headerGap: {
    textAlign: 'right'
  },
  headerTitle: {
    width: '20%'
  },
  headerValue: {
    width: '79%',
    textAlign: 'left'
  },
  docTitle: {
    width: '100%',
    fontSize: 14,
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '30px',
    fontWeight: 'bold',
    textDecoration: 'underline'
  }
});

export default styles;
