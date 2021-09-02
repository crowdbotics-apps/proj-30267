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
      <View style={styles.View_171_4038} />
      <View style={styles.View_171_4068}>
        <Text style={styles.Text_171_4068}>Backlisted User/Business</Text>
      </View>
      <View style={styles.View_171_4039}>
        <Text style={styles.Text_171_4039}></Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_171_4041}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_171_4042}
      />
      <View style={styles.View_171_4043}>
        <Text style={styles.Text_171_4043}>Hidden from users</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f524/c45e/d2ed9775e09235529a73d70f08b05a2c"
        }}
        style={styles.ImageBackground_172_3973}
      />
      <View style={styles.View_172_3974}>
        <Text style={styles.Text_172_3974}>User Name</Text>
      </View>
      <View style={styles.View_173_3974}>
        <Text style={styles.Text_173_3974}>Business Name</Text>
      </View>
      <View style={styles.View_172_3975}>
        <Text style={styles.Text_172_3975}>Details</Text>
      </View>
      <View style={styles.View_173_3975}>
        <Text style={styles.Text_173_3975}>Details</Text>
      </View>
      <View style={styles.View_172_3976}>
        <Text style={styles.Text_172_3976}>
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry. Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry. Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry. Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry.{" "}
        </Text>
      </View>
      <View style={styles.View_173_3976}>
        <Text style={styles.Text_173_3976}>
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry. Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry. Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry. Loreum ipsum has been the industry standard dummy text ever
          since.Loreum ipsum a dummy text of the printing and typesetting
          industry.{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e346/5a5e/2a12d3b4b7cfb4c636c163d52c926312"
        }}
        style={styles.ImageBackground_173_3973}
      />
      <View style={styles.View_171_4044}>
        <View style={styles.View_I171_4044_12_141}>
          <View style={styles.View_I171_4044_12_142}>
            <View style={styles.View_I171_4044_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I171_4044_12_144}
            />
            <View style={styles.View_I171_4044_12_145} />
          </View>
          <View style={styles.View_I171_4044_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I171_4044_12_147}
            />
          </View>
          <View style={styles.View_I171_4044_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I171_4044_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I171_4044_12_157}>
          <View style={styles.View_I171_4044_12_158}>
            <Text style={styles.Text_I171_4044_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(212, 212, 212, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_171_4038: {
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
  View_171_4068: {
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("16.120218579234972%"),
    justifyContent: "center"
  },
  Text_171_4068: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_4039: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("22.404371584699454%"),
    justifyContent: "center"
  },
  Text_171_4039: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_171_4041: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896176%")
  },
  ImageBackground_171_4042: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("10.245901639344263%")
  },
  View_171_4043: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    top: hp("98.90710382513662%"),
    justifyContent: "center"
  },
  Text_171_4043: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_172_3973: {
    width: wp("6.4%"),
    height: hp("2.3845008162201426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("29.37158469945355%")
  },
  View_172_3974: {
    width: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("29.098360655737704%"),
    justifyContent: "center"
  },
  Text_172_3974: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_3974: {
    width: wp("37.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("60.92896174863388%"),
    justifyContent: "center"
  },
  Text_173_3974: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_3975: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("36.20218579234973%"),
    justifyContent: "center"
  },
  Text_172_3975: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_3975: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("67.07650273224044%"),
    justifyContent: "center"
  },
  Text_173_3975: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_3976: {
    width: wp("93.12884114583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("40.43715846994536%"),
    justifyContent: "center"
  },
  Text_172_3976: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  View_173_3976: {
    width: wp("93.12884114583333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("71.31147540983606%"),
    justifyContent: "center"
  },
  Text_173_3976: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  ImageBackground_173_3973: {
    width: wp("5.866666666666666%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("60.92896174863388%")
  },
  View_171_4044: {
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
  View_I171_4044_12_141: {
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
  View_I171_4044_12_142: {
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
  View_I171_4044_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.045559575648907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I171_4044_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I171_4044_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31878361936475397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I171_4044_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I171_4044_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18217159750683054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7109375%")
  },
  View_I171_4044_12_151: {
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
  ImageBackground_I171_4044_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17760416666666856%")
  },
  View_I171_4044_12_157: {
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
  View_I171_4044_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08906249999999982%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I171_4044_12_158: {
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
