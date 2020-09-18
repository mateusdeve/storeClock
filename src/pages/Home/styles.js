import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    padding: 20,
  },

  content: {
    flex: 1,
    resizeMode: 'cover',
  },

  logo: {
    width: 110,
    height: 50,
    marginTop: 100,
    marginLeft: 50,
  },

  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 90,
    color: '#FFF',
    fontSize: 45,
    lineHeight: 60,
    maxWidth: 210,
    fontWeight: '600',
  },

  button: {
    marginVertical: 40,
    backgroundColor: '#fff',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 220,
  },

  buttonText: {
    color: '#7159C1',
    fontSize: 20,
  },
});

export default styles;
