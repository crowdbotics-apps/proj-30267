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
      <View style={styles.View_146_2506}>
        <View style={styles.View_I146_2506_12_9}>
          <Text style={styles.Text_I146_2506_12_9}>PAYIN</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_146_2507}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_146_2508}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_146_2509}
      />
      <View style={styles.View_146_2510}>
        <Text style={styles.Text_146_2510}>
          Home Payment and Transfer PayIn{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b402/317f/cad1674112f8af50f176b989a298f7ac"
        }}
        style={styles.ImageBackground_146_2511}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b402/317f/cad1674112f8af50f176b989a298f7ac"
        }}
        style={styles.ImageBackground_146_2512}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_146_2513}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f037/851c/b94400754ca1b58d78dfe05969ea92d3"
          }}
          style={styles.ImageBackground_I146_2513_31_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c33/c901/7465fc550e2a17be5de639b0c760cb9c"
          }}
          style={styles.ImageBackground_I146_2513_31_153}
        />
        <View style={styles.View_I146_2513_31_165}>
          <Text style={styles.Text_I146_2513_31_165}>
            Natural Person/Business
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_146_2514}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f037/851c/b94400754ca1b58d78dfe05969ea92d3"
          }}
          style={styles.ImageBackground_I146_2514_31_150}
        />
        <View style={styles.View_I146_2514_31_165}>
          <Text style={styles.Text_I146_2514_31_165}>
            Personal Bank ,Marketplace to Marketplace
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_146_2515}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f037/851c/b94400754ca1b58d78dfe05969ea92d3"
          }}
          style={styles.ImageBackground_I146_2515_31_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c33/c901/7465fc550e2a17be5de639b0c760cb9c"
          }}
          style={styles.ImageBackground_I146_2515_31_153}
        />
        <View style={styles.View_I146_2515_31_165}>
          <Text style={styles.Text_I146_2515_31_165}>B2B, 3rd Party</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_146_2516}>
        <Text style={styles.Text_146_2516}>Select any</Text>
      </View>
      <View style={styles.View_146_2517}>
        <View style={styles.View_I146_2517_12_141}>
          <View style={styles.View_I146_2517_12_142}>
            <View style={styles.View_I146_2517_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I146_2517_12_144}
            />
            <View style={styles.View_I146_2517_12_145} />
          </View>
          <View style={styles.View_I146_2517_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I146_2517_12_147}
            />
          </View>
          <View style={styles.View_I146_2517_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I146_2517_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I146_2517_12_157}>
          <View style={styles.View_I146_2517_12_158}>
            <Text style={styles.Text_I146_2517_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127.59562841530054%") },
  View_146_2506: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("19.808743169398905%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I146_2506_12_9: {
    flexGrow: 1,
    width: wp("19.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666674%"),
    top: hp("0.819672131147545%"),
    justifyContent: "center"
  },
  Text_I146_2506_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_146_2507: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("5.46448087431694%")
  },
  ImageBackground_146_2508: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("8.19672131147541%")
  },
  ImageBackground_146_2509: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.2%"),
    top: hp("8.743169398907105%")
  },
  View_146_2510: {
    width: wp("48.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("14.071038251366119%"),
    justifyContent: "flex-start"
  },
  Text_146_2510: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_146_2511: {
    width: wp("0.8%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("14.48087431693989%")
  },
  ImageBackground_146_2512: {
    width: wp("0.8%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333333%"),
    top: hp("14.48087431693989%")
  },
  TouchableOpacity_146_2513: {
    width: wp("25.6%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("40.30054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I146_2513_31_150: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I146_2513_31_153: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I146_2513_31_165: {
    flexGrow: 1,
    width: wp("58.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "flex-start"
  },
  Text_I146_2513_31_165: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_146_2514: {
    width: wp("25.6%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("56.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I146_2514_31_150: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I146_2514_31_165: {
    flexGrow: 1,
    width: wp("66.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I146_2514_31_165: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_146_2515: {
    width: wp("25.6%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("77.18579234972678%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I146_2515_31_150: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I146_2515_31_153: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I146_2515_31_165: {
    flexGrow: 1,
    width: wp("34.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333332%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I146_2515_31_165: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_2516: {
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("29.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_146_2516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_2517: {
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
  View_I146_2517_12_141: {
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
  View_I146_2517_12_142: {
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
  View_I146_2517_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.04553664577463268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I146_2517_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I146_2517_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31876068949048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I146_2517_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I146_2517_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.1821486676325561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I146_2517_12_151: {
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
  ImageBackground_I146_2517_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.0910753760832903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I146_2517_12_157: {
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
  View_I146_2517_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I146_2517_12_158: {
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
