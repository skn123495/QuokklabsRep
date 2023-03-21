import { Dimensions } from "react-native";
import { Colors } from "../constants/styles";
const { width } = Dimensions.get("window");

export default {
  logo: {
    resizeMode: "contain",
    height: 30,
    width: 80,
  },
  headerContain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  productImg: { height: 156, width: 212, resizeMode: "contain" },
  productTitTxt: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  productContain: {
    width: 200,
    minHeight: 300,
    backgroundColor: Colors.white,
    marginLeft: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  recomendTxt: {
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 15,
    paddingLeft: 15,
  },
  flatContain: { marginHorizontal: 10, alignItems: "center", marginTop: 20 },
  carContain: {
    flex: 1,
    justifyContent: "center",
  },
  carImg: {
    width: width,
    height: width / 2,
    resizeMode: "stretch",
  },
  locationBanner: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 15,
  },
  banner: { width: "100%", height: 40, resizeMode: "contain" },
  textInputContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    width: "65%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
};
