// import { getHomeComponents } from '../home.service';
// import CategoryBar from './category-bar/category-bar';
// import Navbar from './navbar/navbar';
// import TopBar from './top-bar/top-bar';

// const getHeaderComponents = async () => {
//   const all = [CategoryBar, Navbar, TopBar];
//   const headerComponents = await getHomeComponents<'Header'>('Header');
//   const enabledComponents = all.reduce((acc, component) => {
//     const name = component.name;
//     if (headerComponents[name]) {
//       return { ...acc, [name]: component };
//     } else {
//       return { ...acc, [name]: null };
//     }
//   }, {});

//   //   console.log('Enabled: ', enabledComponents);
//   return enabledComponents;
// };

// export default getHeaderComponents;
