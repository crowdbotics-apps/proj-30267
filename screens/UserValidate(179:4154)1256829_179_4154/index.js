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
      <View style={styles.View_179_4155} />
      <View style={styles.View_179_4156}>
        <View style={styles.View_I179_4156_12_9}>
          <Text style={styles.Text_I179_4156_12_9}>Is the User verified?</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_179_4157}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("34_246"))
        }
      >
        <View style={styles.View_179_4158} />
        <View style={styles.View_179_4159}>
          <Text style={styles.Text_179_4159}>no</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_179_4160}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("179_4195"))
        }
      >
        <View style={styles.View_179_4161} />
        <View style={styles.View_179_4162}>
          <Text style={styles.Text_179_4162}>YES</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/657e/3819/42609252a2b043e4dd8d70ad7da439b3"
        }}
        style={styles.ImageBackground_179_4163}
      />
      <View style={styles.View_179_4188}>
        <Text style={styles.Text_179_4188}>hidden from users</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7a6/637e/5fac2004695e0163eeccfc993983d4af"
        }}
        style={styles.ImageBackground_179_4190}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bc/51a6/30b19c178dd46d793e90dbe9168a9c3c"
        }}
        style={styles.ImageBackground_179_4191}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2bc/51a6/30b19c178dd46d793e90dbe9168a9c3c"
        }}
        style={styles.ImageBackground_179_4192}
      />
      <View style={styles.View_179_4164}>
        <View style={styles.View_I179_4164_12_141}>
          <View style={styles.View_I179_4164_12_142}>
            <View style={styles.View_I179_4164_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I179_4164_12_144}
            />
            <View style={styles.View_I179_4164_12_145} />
          </View>
          <View style={styles.View_I179_4164_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I179_4164_12_147}
            />
          </View>
          <View style={styles.View_I179_4164_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I179_4164_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I179_4164_12_157}>
          <View style={styles.View_I179_4164_12_158}>
            <Text style={styles.Text_I179_4164_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_179_4155: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_179_4156: {
    width: wp("84.26666666666667%"),
    minWidth: wp("84.26666666666667%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("25.546448087431695%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_4156_12_9: {
    flexGrow: 1,
    width: wp("61.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.341528387017586%"),
    justifyContent: "center"
  },
  Text_I179_4156_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  TouchableOpacity_179_4157: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("69.12568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_179_4158: {
    width: wp("38.4%"),
    height: hp("6.967213114754098%"),
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
  View_179_4159: {
    width: wp("12.497039794921875%"),
    top: hp("1.7418032786885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.951432291666666%"),
    justifyContent: "center"
  },
  Text_179_4159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  TouchableOpacity_179_4160: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.2%"),
    top: hp("69.12568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_179_4161: {
    width: wp("38.4%"),
    height: hp("6.967213114754098%"),
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
  View_179_4162: {
    width: wp("12.497039794921875%"),
    top: hp("1.7418032786885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.951432291666663%"),
    justifyContent: "center"
  },
  Text_179_4162: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  ImageBackground_179_4163: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("6.0109289617486334%")
  },
  View_179_4188: {
    width: wp("58.666666666666664%"),
    minWidth: wp("58.666666666666664%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    top: hp("94.67213114754098%"),
    justifyContent: "center"
  },
  Text_179_4188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_179_4190: {
    width: wp("0.5494171778361002%"),
    minWidth: wp("0.5494171778361002%"),
    height: hp("438.66123553833677%"),
    minHeight: hp("438.66123553833677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.450520833333336%"),
    top: hp("110.92896174863387%")
  },
  ImageBackground_179_4191: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("438.6612021857924%"),
    minHeight: hp("438.6612021857924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("110.92896174863387%")
  },
  ImageBackground_179_4192: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("438.6612021857924%"),
    minHeight: hp("438.6612021857924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("110.92896174863387%")
  },
  View_179_4164: {
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
  View_I179_4164_12_141: {
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
  View_I179_4164_12_142: {
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
  View_I179_4164_12_143: {
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
  ImageBackground_I179_4164_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I179_4164_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187669430925544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I179_4164_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_4164_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215492123463095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7110677083333314%")
  },
  View_I179_4164_12_151: {
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
  ImageBackground_I179_4164_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09106912248121546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1777343750000142%")
  },
  View_I179_4164_12_157: {
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
  View_I179_4164_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08893229166666572%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I179_4164_12_158: {
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
