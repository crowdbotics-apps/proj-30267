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
      <View style={styles.View_176_4069} />
      <View style={styles.View_176_4070} />
      <View style={styles.View_176_4071}>
        <View style={styles.View_I176_4071_12_9}>
          <Text style={styles.Text_I176_4071_12_9}>Your Client Details</Text>
        </View>
      </View>
      <View style={styles.View_176_4072} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_176_4073}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_176_4074}
      />
      <View style={styles.View_176_4075}>
        <Text style={styles.Text_176_4075}>Client Name</Text>
      </View>
      <View style={styles.View_176_4076}>
        <Text style={styles.Text_176_4076}>Transactions</Text>
      </View>
      <View style={styles.View_176_4077}>
        <View style={styles.View_I176_4077_24_62}>
          <View style={styles.View_I176_4077_24_63} />
          <View style={styles.View_I176_4077_24_64}>
            <Text style={styles.Text_I176_4077_24_64}>Client IBAN</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_176_4078}>
        <View style={styles.View_I176_4078_24_62}>
          <View style={styles.View_I176_4078_24_63} />
          <View style={styles.View_I176_4078_24_64}>
            <Text style={styles.Text_I176_4078_24_64}>
              Clients Account Location
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_176_4079}>
        <View style={styles.View_I176_4079_24_62}>
          <View style={styles.View_I176_4079_24_63} />
          <View style={styles.View_I176_4079_24_64}>
            <Text style={styles.Text_I176_4079_24_64}>Amount</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3162/129c/be36e2b16ad267f7a18b45d7cb22ccde"
        }}
        style={styles.ImageBackground_176_4080}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67d4/7434/80f3f52865c53bb528b6cd96735ab1ad"
        }}
        style={styles.ImageBackground_176_4081}
      />
      <View style={styles.View_176_4082}>
        <View style={styles.View_I176_4082_24_62}>
          <View style={styles.View_I176_4082_24_63} />
          <View style={styles.View_I176_4082_24_64}>
            <Text style={styles.Text_I176_4082_24_64}>Currency</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/719d/0610/1e2b3e9e6bd32f6a2613b770385b80a7"
        }}
        style={styles.ImageBackground_176_4083}
      />
      <View style={styles.View_176_4084}>
        <View style={styles.View_I176_4084_24_62}>
          <View style={styles.View_I176_4084_24_63} />
          <View style={styles.View_I176_4084_24_64}>
            <Text style={styles.Text_I176_4084_24_64}>Time</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39a8/ff99/3078186853a1e6a29b10d4da681c3ac0"
        }}
        style={styles.ImageBackground_176_4085}
      />
      <View style={styles.View_176_4086}>
        <View style={styles.View_I176_4086_24_62}>
          <View style={styles.View_I176_4086_24_63} />
          <View style={styles.View_I176_4086_24_64}>
            <Text style={styles.Text_I176_4086_24_64}>Reference</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/907a/b694/1fb136e30ad6bc58bda738e8b6a442c1"
        }}
        style={styles.TouchableOpacity_176_4087}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("137_2015"))
        }
      />
      <View style={styles.View_176_4088}>
        <View style={styles.View_I176_4088_12_141}>
          <View style={styles.View_I176_4088_12_142}>
            <View style={styles.View_I176_4088_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I176_4088_12_144}
            />
            <View style={styles.View_I176_4088_12_145} />
          </View>
          <View style={styles.View_I176_4088_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I176_4088_12_147}
            />
          </View>
          <View style={styles.View_I176_4088_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I176_4088_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I176_4088_12_157}>
          <View style={styles.View_I176_4088_12_158}>
            <Text style={styles.Text_I176_4088_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_176_4069: {
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
  View_176_4070: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("13.524590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_4071: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("13.524590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4071_12_9: {
    flexGrow: 1,
    width: wp("57.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475397%"),
    justifyContent: "center"
  },
  Text_I176_4071_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_176_4072: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("76.22950819672131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_176_4073: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6%"),
    top: hp("6.830601092896176%")
  },
  ImageBackground_176_4074: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25.546448087431695%")
  },
  View_176_4075: {
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("25.546448087431695%"),
    justifyContent: "center"
  },
  Text_176_4075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_176_4076: {
    width: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("42.349726775956285%"),
    justifyContent: "center"
  },
  Text_176_4076: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.27,
    textTransform: "none"
  },
  View_176_4077: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("33.46994535519126%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4077_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4077_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I176_4077_24_64: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I176_4077_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_4078: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("86.0655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4078_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4078_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I176_4078_24_64: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_I176_4078_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_4079: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("48.224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4079_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4079_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I176_4079_24_64: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I176_4079_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_4080: {
    width: wp("2.933333333333333%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    top: hp("50%")
  },
  ImageBackground_176_4081: {
    width: wp("5.866666666666666%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("43.0327868852459%")
  },
  View_176_4082: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("57.103825136612016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4082_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4082_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I176_4082_24_64: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I176_4082_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_4083: {
    width: wp("6.4%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("59.15300546448088%")
  },
  View_176_4084: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("73.90710382513662%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4084_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4084_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I176_4084_24_64: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I176_4084_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_4085: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("75.27322404371584%")
  },
  View_176_4086: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("65.1639344262295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4086_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4086_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I176_4086_24_64: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_I176_4086_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_176_4087: {
    width: wp("16%"),
    height: hp("1.366120218579235%"),
    top: hp("100.81967213114753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%")
  },
  View_176_4088: {
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
  View_I176_4088_12_141: {
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
  View_I176_4088_12_142: {
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
  View_I176_4088_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.0454928705601092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I176_4088_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I176_4088_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I176_4088_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I176_4088_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7109375%")
  },
  View_I176_4088_12_151: {
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
  ImageBackground_I176_4088_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17760416666666856%")
  },
  View_I176_4088_12_157: {
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
  View_I176_4088_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08906249999999982%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I176_4088_12_158: {
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
