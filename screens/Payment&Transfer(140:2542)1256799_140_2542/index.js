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
      <View style={styles.View_140_2543}>
        <View style={styles.View_I140_2543_12_9}>
          <Text style={styles.Text_I140_2543_12_9}>Payment and Transfer</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_140_2544}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_140_2545}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_140_2546}
      />
      <View style={styles.View_140_2547}>
        <Text style={styles.Text_140_2547}>
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever since.
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever since.
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever since.
        </Text>
      </View>
      <View style={styles.View_140_2549}>
        <View style={styles.View_140_2550} />
        <View style={styles.View_140_2551}>
          <Text style={styles.Text_140_2551}>NEXT</Text>
        </View>
      </View>
      <View style={styles.View_146_2807}>
        <Text style={styles.Text_146_2807}>
          To get started choose any one below
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_146_2816}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("143_2573"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f037/851c/b94400754ca1b58d78dfe05969ea92d3"
          }}
          style={styles.ImageBackground_I146_2816_31_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c33/c901/7465fc550e2a17be5de639b0c760cb9c"
          }}
          style={styles.ImageBackground_I146_2816_31_153}
        />
        <View style={styles.View_I146_2816_31_165}>
          <Text style={styles.Text_I146_2816_31_165}>PAYIN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_146_2833}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("146_2727"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f037/851c/b94400754ca1b58d78dfe05969ea92d3"
          }}
          style={styles.ImageBackground_I146_2833_31_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c33/c901/7465fc550e2a17be5de639b0c760cb9c"
          }}
          style={styles.ImageBackground_I146_2833_31_153}
        />
        <View style={styles.View_I146_2833_31_165}>
          <Text style={styles.Text_I146_2833_31_165}>PAYOUT</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0145/fdac/e3f7c88fedb3d810ad96bfb2f32cfcc2"
        }}
        style={styles.ImageBackground_176_4300}
      />
      <View style={styles.View_140_2552}>
        <View style={styles.View_I140_2552_12_141}>
          <View style={styles.View_I140_2552_12_142}>
            <View style={styles.View_I140_2552_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I140_2552_12_144}
            />
            <View style={styles.View_I140_2552_12_145} />
          </View>
          <View style={styles.View_I140_2552_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I140_2552_12_147}
            />
          </View>
          <View style={styles.View_I140_2552_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I140_2552_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I140_2552_12_157}>
          <View style={styles.View_I140_2552_12_158}>
            <Text style={styles.Text_I140_2552_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("127.59562841530054%") },
  View_140_2543: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("17.076502732240435%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_2543_12_9: {
    flexGrow: 1,
    width: wp("69.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.199999999999996%"),
    top: hp("0.819672131147545%"),
    justifyContent: "center"
  },
  Text_I140_2543_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_140_2544: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612022%")
  },
  ImageBackground_140_2545: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("8.19672131147541%")
  },
  ImageBackground_140_2546: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.2%"),
    top: hp("8.743169398907105%")
  },
  View_140_2547: {
    width: wp("93.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("34.2896174863388%"),
    justifyContent: "center"
  },
  Text_140_2547: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: -0.21,
    textTransform: "uppercase"
  },
  View_140_2549: {
    width: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("105.60109289617485%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_140_2550: {
    width: wp("40.266666666666666%"),
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
  View_140_2551: {
    width: wp("26.0889404296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159374999999997%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_140_2551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_146_2807: {
    width: wp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("60.79234972677595%"),
    justifyContent: "flex-start"
  },
  Text_146_2807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_146_2816: {
    width: wp("25.6%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("72.81420765027322%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I146_2816_31_150: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I146_2816_31_153: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I146_2816_31_165: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333329%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_I146_2816_31_165: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_146_2833: {
    width: wp("25.6%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("85.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I146_2833_31_150: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I146_2833_31_153: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I146_2833_31_165: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333329%"),
    top: hp("0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I146_2833_31_165: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_4300: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("35.65573770491803%"),
    minHeight: hp("35.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("127.59562841530054%")
  },
  View_140_2552: {
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
  View_I140_2552_12_141: {
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
  View_I140_2552_12_142: {
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
  View_I140_2552_12_143: {
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
  ImageBackground_I140_2552_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I140_2552_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31876068949048%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I140_2552_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I140_2552_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.1821486676325561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I140_2552_12_151: {
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
  ImageBackground_I140_2552_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.0910753760832903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I140_2552_12_157: {
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
  View_I140_2552_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I140_2552_12_158: {
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
