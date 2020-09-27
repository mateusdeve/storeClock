import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    resizeMode: 'cover',
  },

  body: {
    minHeight: 670,
  },

  groupTitle: {
    marginLeft: 50,
  },

  bodyTitulo: {
    color: '#7159c1',
    fontSize: 22,
    fontWeight: 'bold',
  },

  bodySubTitulo: {
    color: '#7159c1',
    fontSize: 15,
  },

  viewImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgRelogio: {
    width: 300,
    height: 300,
  },

  groupButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 170,
  },

  buttonAdd: {
    marginLeft: 20,
    marginRight: 20,
  },

  groupTotal: {
    paddingLeft: 50,
    marginBottom: 40,
  },

  totalText: {
    fontSize: 23,
    color: '#7159c1',
  },
});

export default styles;
