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
      <View style={styles.View_176_4368}>
        <View style={styles.View_I176_4368_12_9}>
          <Text style={styles.Text_I176_4368_12_9}>Store</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_176_4369}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_176_4370}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_176_4371}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_176_4372}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      />
      <View style={styles.View_176_4373}>
        <View style={styles.View_I176_4373_24_62}>
          <View style={styles.View_I176_4373_24_63} />
          <View style={styles.View_I176_4373_24_64}>
            <Text style={styles.Text_I176_4373_24_64}>Store Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_179_4138}>
        <View style={styles.View_I179_4138_24_62}>
          <View style={styles.View_I179_4138_24_63} />
          <View style={styles.View_I179_4138_24_64}>
            <Text style={styles.Text_I179_4138_24_64}>Shop URL</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_176_4374}>
        <View style={styles.View_I176_4374_24_62}>
          <View style={styles.View_I176_4374_24_63} />
          <View style={styles.View_I176_4374_24_64}>
            <Text style={styles.Text_I176_4374_24_64}>Monthly Sales</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_179_4146}>
        <View style={styles.View_I179_4146_24_62}>
          <View style={styles.View_I179_4146_24_63} />
          <View style={styles.View_I179_4146_24_64}>
            <Text style={styles.Text_I179_4146_24_64}>
              Monthly Transactions
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_176_4375}>
        <View style={styles.View_I176_4375_111_1503}>
          <View style={styles.View_I176_4375_111_1504} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
            }}
            style={styles.ImageBackground_I176_4375_111_1505}
          />
          <View style={styles.View_I176_4375_111_1506}>
            <Text style={styles.Text_I176_4375_111_1506}>
              Platform of store
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_176_4376}>
        <View style={styles.View_176_4377} />
        <View style={styles.View_176_4378}>
          <Text style={styles.Text_176_4378}>back</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_176_4379}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("140_2272"))
        }
      >
        <View style={styles.View_176_4380} />
        <View style={styles.View_176_4381}>
          <Text style={styles.Text_176_4381}>NEXT</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_176_4382}>
        <View style={styles.View_I176_4382_12_141}>
          <View style={styles.View_I176_4382_12_142}>
            <View style={styles.View_I176_4382_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I176_4382_12_144}
            />
            <View style={styles.View_I176_4382_12_145} />
          </View>
          <View style={styles.View_I176_4382_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I176_4382_12_147}
            />
          </View>
          <View style={styles.View_I176_4382_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I176_4382_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I176_4382_12_157}>
          <View style={styles.View_I176_4382_12_158}>
            <Text style={styles.Text_I176_4382_12_158}>9:27</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/daab/c9b5/7b3f6e79409deb234f8c2d1d6ac4c6ca"
        }}
        style={styles.ImageBackground_176_4383}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ed5/d3a6/43149c0cdf18142f661e5e5d980be055"
        }}
        style={styles.ImageBackground_176_4384}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_176_4368: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("13.797814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4368_12_9: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I176_4368_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_176_4369: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_176_4370: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.06666666666668%"),
    top: hp("7.923497267759563%")
  },
  ImageBackground_176_4371: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("8.469945355191257%")
  },
  TouchableOpacity_176_4372: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("40.30054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_4373: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("23.497267759562842%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4373_24_62: {
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
  View_I176_4373_24_63: {
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
  View_I176_4373_24_64: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.9125683060109289%"),
    justifyContent: "flex-start"
  },
  Text_I176_4373_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_4138: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("34.2896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_4138_24_62: {
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
  View_I179_4138_24_63: {
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
  View_I179_4138_24_64: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I179_4138_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_4374: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("56.830601092896174%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4374_24_62: {
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
  View_I176_4374_24_63: {
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
  View_I176_4374_24_64: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I176_4374_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_4146: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("68.16939890710383%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_4146_24_62: {
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
  View_I179_4146_24_63: {
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
  View_I179_4146_24_64: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I179_4146_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_4375: {
    width: wp("93.60000000000001%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("45.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4375_111_1503: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I176_4375_111_1504: {
    width: wp("93.60000000000001%"),
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
  ImageBackground_I176_4375_111_1505: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.5956284153005456%")
  },
  View_I176_4375_111_1506: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I176_4375_111_1506: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_4376: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_4377: {
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
  View_176_4378: {
    width: wp("26.0889404296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159374999999999%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_176_4378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  TouchableOpacity_176_4379: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("86.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_4380: {
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
  View_176_4381: {
    width: wp("26.0889404296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.159375000000004%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_176_4381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_176_4382: {
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
  View_I176_4382_12_141: {
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
  View_I176_4382_12_142: {
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
  View_I176_4382_12_143: {
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
  ImageBackground_I176_4382_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I176_4382_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187669430925544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I176_4382_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I176_4382_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18215492123463095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I176_4382_12_151: {
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
  ImageBackground_I176_4382_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09106912248121546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I176_4382_12_157: {
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
  View_I176_4382_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I176_4382_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  ImageBackground_176_4383: {
    width: wp("0.5734722137451173%"),
    minWidth: wp("0.5734722137451173%"),
    height: hp("27.322189664580133%"),
    minHeight: hp("27.322189664580133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.559375%"),
    top: hp("110.92896174863387%")
  },
  ImageBackground_176_4384: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("110.92896174863387%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
