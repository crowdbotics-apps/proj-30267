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
      <View style={styles.View_30_196} />
      <View style={styles.View_30_197}>
        <View style={styles.View_I30_197_12_9}>
          <Text style={styles.Text_I30_197_12_9}>Account Type</Text>
        </View>
      </View>
      <View style={styles.View_30_198}>
        <View style={styles.View_30_199} />
        <View style={styles.View_30_200}>
          <Text style={styles.Text_30_200}>next</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_31_149}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f037/851c/b94400754ca1b58d78dfe05969ea92d3"
          }}
          style={styles.ImageBackground_31_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c33/c901/7465fc550e2a17be5de639b0c760cb9c"
          }}
          style={styles.ImageBackground_31_153}
        />
        <View style={styles.View_31_165}>
          <Text style={styles.Text_31_165}>Retail Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_31_166}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("32_183"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f037/851c/b94400754ca1b58d78dfe05969ea92d3"
          }}
          style={styles.ImageBackground_31_167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c33/c901/7465fc550e2a17be5de639b0c760cb9c"
          }}
          style={styles.ImageBackground_31_170}
        />
        <View style={styles.View_31_182}>
          <Text style={styles.Text_31_182}>Business Account</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4341}
      />
      <View style={styles.View_30_202}>
        <View style={styles.View_I30_202_12_141}>
          <View style={styles.View_I30_202_12_142}>
            <View style={styles.View_I30_202_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I30_202_12_144}
            />
            <View style={styles.View_I30_202_12_145} />
          </View>
          <View style={styles.View_I30_202_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I30_202_12_147}
            />
          </View>
          <View style={styles.View_I30_202_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I30_202_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I30_202_12_157}>
          <View style={styles.View_I30_202_12_158}>
            <Text style={styles.Text_I30_202_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_30_196: {
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
  View_30_197: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("13.524590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_197_12_9: {
    flexGrow: 1,
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.27322404371584597%"),
    justifyContent: "center"
  },
  Text_I30_197_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_30_198: {
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("67.34972677595628%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_199: {
    width: wp("91.46666666666667%"),
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
  View_30_200: {
    width: wp("12.8%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0099609375%"),
    justifyContent: "center"
  },
  Text_30_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  TouchableOpacity_31_149: {
    width: wp("25.6%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("33.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_150: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_31_153: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_31_165: {
    flexGrow: 1,
    width: wp("46.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_31_165: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_31_166: {
    width: wp("25.6%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("43.85245901639344%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_167: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_31_170: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_31_182: {
    flexGrow: 1,
    width: wp("57.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "flex-start"
  },
  Text_31_182: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_179_4341: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("6.0109289617486334%")
  },
  View_30_202: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I30_202_12_141: {
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
  View_I30_202_12_142: {
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
  View_I30_202_12_143: {
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
  ImageBackground_I30_202_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I30_202_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187669430925544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I30_202_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I30_202_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215492123463095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7111002604166572%")
  },
  View_I30_202_12_151: {
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
  ImageBackground_I30_202_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09106912248121546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17776692708333997%")
  },
  View_I30_202_12_157: {
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
  View_I30_202_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08889973958333286%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I30_202_12_158: {
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
