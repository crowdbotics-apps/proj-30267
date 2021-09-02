import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_140_2274}>
        <View style={styles.View_I140_2274_12_9}>
          <Text style={styles.Text_I140_2274_12_9}>
            Available Site Functionalities
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_140_2284}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_140_2285}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_140_2287}
      />
      <View style={styles.View_140_2444}>
        <View style={styles.View_140_2445} />
        <View style={styles.View_140_2446}>
          <Text style={styles.Text_140_2446}>BACK</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_140_2451}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("140_2399"))
        }
      >
        <Text style={styles.Text_140_2451}>
          Account preview/ User Perks links
        </Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4380/21e1/292b3d2f52412831c10d2429bc9b3b56"
        }}
        style={styles.ImageBackground_140_2459}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4380/21e1/292b3d2f52412831c10d2429bc9b3b56"
        }}
        style={styles.ImageBackground_140_2466}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4380/21e1/292b3d2f52412831c10d2429bc9b3b56"
        }}
        style={styles.ImageBackground_140_2472}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4380/21e1/292b3d2f52412831c10d2429bc9b3b56"
        }}
        style={styles.ImageBackground_140_2473}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_140_2460}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("140_2482"))
        }
      >
        <Text style={styles.Text_140_2460}>Store management</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_140_2467}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("140_2512"))
        }
      >
        <Text style={styles.Text_140_2467}>Transaction record</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_140_2474}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("140_2542"))
        }
      >
        <Text style={styles.Text_140_2474}>Payment and Transfer</Text>
      </TouchableOpacity>
      <View style={styles.View_140_2288}>
        <View style={styles.View_I140_2288_12_141}>
          <View style={styles.View_I140_2288_12_142}>
            <View style={styles.View_I140_2288_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I140_2288_12_144}
            />
            <View style={styles.View_I140_2288_12_145} />
          </View>
          <View style={styles.View_I140_2288_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I140_2288_12_147}
            />
          </View>
          <View style={styles.View_I140_2288_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I140_2288_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I140_2288_12_157}>
          <View style={styles.View_I140_2288_12_158}>
            <Text style={styles.Text_I140_2288_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127.59562841530054%") },
  View_140_2274: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("19.262295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_2274_12_9: {
    flexGrow: 1,
    width: wp("88.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28.799999999999997%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I140_2274_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_140_2284: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612022%")
  },
  ImageBackground_140_2285: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("8.19672131147541%")
  },
  ImageBackground_140_2287: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.2%"),
    top: hp("8.743169398907105%")
  },
  View_140_2444: {
    width: wp("41.6%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("104.91803278688525%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_140_2445: {
    width: wp("41.6%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_140_2446: {
    width: wp("26.952813720703123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.395833333333339%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_140_2446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  TouchableOpacity_140_2451: {
    width: wp("80.01028645833334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("35.38251366120219%"),
    justifyContent: "flex-start"
  },
  Text_140_2451: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  ImageBackground_140_2459: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("35.38251366120219%")
  },
  ImageBackground_140_2466: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("49.18032786885246%")
  },
  ImageBackground_140_2472: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("65.02732240437157%")
  },
  ImageBackground_140_2473: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("80.87431693989072%")
  },
  TouchableOpacity_140_2460: {
    width: wp("46.143672688802084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("49.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_140_2460: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  TouchableOpacity_140_2467: {
    width: wp("43.7436767578125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("65.02731406623549%"),
    justifyContent: "flex-start"
  },
  Text_140_2467: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  TouchableOpacity_140_2474: {
    width: wp("52.01033121744791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("80.87433361616291%"),
    justifyContent: "flex-start"
  },
  Text_140_2474: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_140_2288: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_2288_12_141: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_2288_12_142: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666683%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_2288_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.045542899376707524%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I140_2288_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I140_2288_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187669430925544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I140_2288_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I140_2288_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215492123463095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I140_2288_12_151: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I140_2288_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09106912248121546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I140_2288_12_157: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.092896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_2288_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I140_2288_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
