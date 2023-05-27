// export default class ProductsManager {
//     constructor(){
//         this.path = './products.js';
//     }

//     getProducts = async () => {
//         if( fs.existsSync( this.path ) ){

//             const data = await fs.promises.readFile( this.path, 'utf-8' );
//             const products = JSON.parse( data );
//             return products;

//         } else {

//             return [];
        
//         }
//     };

//     addProduct = async ( prodData ) => {

//         const { title, description, price, thumbnail, code, stock } = prodData;

//         let products = await this.getProducts();

//         let idCount = products.length;

//         const newProduct = {
//             id: ++idCount,
//             title,
//             description,
//             price,
//             thumbnail,
//             code,
//             stock
//         };

//         products.push( newProduct );

//         await fs.promises.writeFile( this.path, JSON.stringify( products, null, '\t' ));
//     }


//     getProductById = async ( id ) => {
//         const products = await this.getProducts();
//         if( products.length === 0 ) return;

//         const productById = products.find( prod => prod.id === id );

//         return productById;
//     };

//     updateProduct = async ( id, updateData ) => {
//         const product = await this.getProductById( id );

//         return {
//             ...product,
//             ...updateData
//         }
//     };

//     deleteProduct = async ( id ) => {
//         const product = await this.getProductById( id );
//         const products = products.map( prod => prod.id !== id );

//         return products;
//     }

    

// };
