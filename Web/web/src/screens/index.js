export { default as HomeScreen } from "./home/HomeScreen"; // lo que se importaba en el fichero en modo default, quiero que ahora obtenga el nombre de HomeScreen
export { default as CreateStreamScreen } from "./create-stream/CreateStreamScreen";
export { default as StreamScreen } from "./streams/streams-list/StreamsScreen";
export { default as WoodScreen } from "./wood/wood-list/WoodListScreen";
export { default as StreamDetailScreen } from "./streams/stream-detail/StreamDetailScreen";
export { default as CreateWoodScreen } from "./wood/create-wood/CreateWoodScreen";
export { default as UserProfileScreen } from "./user/UserProfileScreen";
export { default as RegisterScreen } from "./user/user-account/register/RegisterScreen";
export { default as WoodDetailScreen } from "./wood/wood-detail/WoodDetailScreen";
export { default as RankingScreen } from "./ranking/RankingScreen";


// cuando ponemos el IMPORT por ejemplo en HomeScreen, le ponemos el nombre del componente pero realmente lo q exportamos es el default