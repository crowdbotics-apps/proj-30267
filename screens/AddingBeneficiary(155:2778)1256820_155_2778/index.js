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
      <View style={styles.View_155_2779}>
        <View style={styles.View_I155_2779_12_9}>
          <Text style={styles.Text_I155_2779_12_9}>New Benificiary </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_155_2780}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d83/45bb/2dbd92e178b38ed129c1b9171bc74205"
        }}
        style={styles.ImageBackground_155_2781}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b7/d2ca/90cbfcf4468ae814ae396ec876b7af00"
        }}
        style={styles.ImageBackground_155_2782}
      />
      <View style={styles.View_155_2783}>
        <Text style={styles.Text_155_2783}>
          Home Payment and Transfer Payout{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b402/317f/cad1674112f8af50f176b989a298f7ac"
        }}
        style={styles.ImageBackground_155_2784}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b402/317f/cad1674112f8af50f176b989a298f7ac"
        }}
        style={styles.ImageBackground_155_2785}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_155_2786}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("33_209"))
        }
      />
      <View style={styles.View_155_2787}>
        <Text style={styles.Text_155_2787}>Recipient Account Details</Text>
      </View>
      <View style={styles.View_155_2788}>
        <Text style={styles.Text_155_2788}>Recipient Address Details</Text>
      </View>
      <View style={styles.View_155_2791}>
        <View style={styles.View_I155_2791_24_62}>
          <View style={styles.View_I155_2791_24_63} />
          <View style={styles.View_I155_2791_24_64}>
            <Text style={styles.Text_I155_2791_24_64}>Acccount Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2895}>
        <View style={styles.View_I155_2895_24_62}>
          <View style={styles.View_I155_2895_24_63} />
          <View style={styles.View_I155_2895_24_64}>
            <Text style={styles.Text_I155_2895_24_64}>Recipient Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2792}>
        <View style={styles.View_I155_2792_24_62}>
          <View style={styles.View_I155_2792_24_63} />
          <View style={styles.View_I155_2792_24_64}>
            <Text style={styles.Text_I155_2792_24_64}>Province</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2795}>
        <View style={styles.View_I155_2795_24_62}>
          <View style={styles.View_I155_2795_24_63} />
          <View style={styles.View_I155_2795_24_64}>
            <Text style={styles.Text_I155_2795_24_64}>Account Number</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2796}>
        <View style={styles.View_I155_2796_24_62}>
          <View style={styles.View_I155_2796_24_63} />
          <View style={styles.View_I155_2796_24_64}>
            <Text style={styles.Text_I155_2796_24_64}>City</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2797}>
        <View style={styles.View_I155_2797_24_62}>
          <View style={styles.View_I155_2797_24_63} />
          <View style={styles.View_I155_2797_24_64}>
            <Text style={styles.Text_I155_2797_24_64}>Bank Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2903}>
        <View style={styles.View_I155_2903_24_62}>
          <View style={styles.View_I155_2903_24_63} />
          <View style={styles.View_I155_2903_24_64}>
            <Text style={styles.Text_I155_2903_24_64}>SWIFT Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2798}>
        <View style={styles.View_I155_2798_24_62}>
          <View style={styles.View_I155_2798_24_63} />
          <View style={styles.View_I155_2798_24_64}>
            <Text style={styles.Text_I155_2798_24_64}>Postal Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2803}>
        <View style={styles.View_I155_2803_12_141}>
          <View style={styles.View_I155_2803_12_142}>
            <View style={styles.View_I155_2803_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I155_2803_12_144}
            />
            <View style={styles.View_I155_2803_12_145} />
          </View>
          <View style={styles.View_I155_2803_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I155_2803_12_147}
            />
          </View>
          <View style={styles.View_I155_2803_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I155_2803_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I155_2803_12_157}>
          <View style={styles.View_I155_2803_12_158}>
            <Text style={styles.Text_I155_2803_12_158}>9:27</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2911}>
        <View style={styles.View_I155_2911_111_1503}>
          <View style={styles.View_I155_2911_111_1504} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
            }}
            style={styles.ImageBackground_I155_2911_111_1505}
          />
          <View style={styles.View_I155_2911_111_1506}>
            <Text style={styles.Text_I155_2911_111_1506}>Country/Region</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_155_2919}>
        <View style={styles.View_I155_2919_41_546}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2d7/e7e5/9dd29919c68ed7639375a2fae37a7af7"
            }}
            style={styles.ImageBackground_I155_2919_41_547}
          />
          <View style={styles.View_I155_2919_41_548}>
            <Text style={styles.Text_I155_2919_41_548}>
              Placeholder text...
            </Text>
          </View>
          <View style={styles.View_I155_2919_41_549}>
            <Text style={styles.Text_I155_2919_41_549}>Address</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I155_2919_41_550}
          />
        </View>
        <View style={styles.View_I155_2919_41_541}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50d5/d38d/5e36dc7699704be39b55f6f48df032c6"
            }}
            style={styles.ImageBackground_I155_2919_41_542}
          />
          <View style={styles.View_I155_2919_41_543}>
            <Text style={styles.Text_I155_2919_41_543}>
              Placeholder text...
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I155_2919_41_545}
          />
        </View>
        <View style={styles.View_I155_2919_41_536}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0edc/77b7/8091833778edfb727ad6773b7c28a858"
            }}
            style={styles.ImageBackground_I155_2919_41_537}
          />
          <View style={styles.View_I155_2919_41_538}>
            <Text style={styles.Text_I155_2919_41_538}>Typing|</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I155_2919_41_540}
          />
        </View>
        <View style={styles.View_I155_2919_41_531}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d4/291a/cc2361c5b95b6ee23074e26ef9b5ce83"
            }}
            style={styles.ImageBackground_I155_2919_41_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I155_2919_41_535}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_155_2937}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("157_2892"))
        }
      >
        <View style={styles.View_155_2938} />
        <View style={styles.View_155_2940}>
          <View style={styles.View_155_2941}>
            <Text style={styles.Text_155_2941}>Add Recipient</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_155_2942}>
        <View style={styles.View_155_2943} />
        <View style={styles.View_155_2944}>
          <View style={styles.View_155_2945}>
            <Text style={styles.Text_155_2945}>Discard</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("171.17486338797815%") },
  View_155_2779: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("15.710382513661203%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2779_12_9: {
    flexGrow: 1,
    width: wp("49.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9.333333333333332%"),
    top: hp("0.8196721311475397%"),
    justifyContent: "center"
  },
  Text_I155_2779_12_9: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_155_2780: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_155_2781: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("8.879781420765028%")
  },
  ImageBackground_155_2782: {
    width: wp("5.447619120279948%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.93333333333334%"),
    top: hp("9.426229508196721%")
  },
  View_155_2783: {
    width: wp("50.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("11.885245901639344%"),
    justifyContent: "flex-start"
  },
  Text_155_2783: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_155_2784: {
    width: wp("0.8%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("12.295081967213115%")
  },
  ImageBackground_155_2785: {
    width: wp("0.8%"),
    height: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("12.295081967213115%")
  },
  TouchableOpacity_155_2786: {
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
  View_155_2787: {
    width: wp("48.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("23.90710382513661%"),
    justifyContent: "flex-start"
  },
  Text_155_2787: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2788: {
    width: wp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("77.59562841530054%"),
    justifyContent: "flex-start"
  },
  Text_155_2788: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2791: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("37.02185792349727%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2791_24_62: {
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
  View_I155_2791_24_63: {
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
  View_I155_2791_24_64: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I155_2791_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2895: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("28.278688524590162%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2895_24_62: {
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
  View_I155_2895_24_63: {
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
  View_I155_2895_24_64: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I155_2895_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2792: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("90.30054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2792_24_62: {
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
  View_I155_2792_24_63: {
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
  View_I155_2792_24_64: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I155_2792_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2795: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("46.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2795_24_62: {
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
  View_I155_2795_24_63: {
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
  View_I155_2795_24_64: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I155_2795_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2796: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("99.04371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2796_24_62: {
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
  View_I155_2796_24_63: {
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
  View_I155_2796_24_64: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.912568306010911%"),
    justifyContent: "flex-start"
  },
  Text_I155_2796_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2797: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("55.05464480874317%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2797_24_62: {
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
  View_I155_2797_24_63: {
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
  View_I155_2797_24_64: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I155_2797_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2903: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("63.79781420765027%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2903_24_62: {
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
  View_I155_2903_24_63: {
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
  View_I155_2903_24_64: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I155_2903_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2798: {
    width: wp("93.06666666666666%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("107.78688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2798_24_62: {
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
  View_I155_2798_24_63: {
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
  View_I155_2798_24_64: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_I155_2798_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2803: {
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
  View_I155_2803_12_141: {
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
  View_I155_2803_12_142: {
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
  View_I155_2803_12_143: {
    width: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    top: hp("0.045526223104507935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I155_2803_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I155_2803_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187502668203548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I155_2803_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I155_2803_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18213824496243136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71145833333334%")
  },
  View_I155_2803_12_151: {
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
  ImageBackground_I155_2803_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09108579875341549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17812500000000853%")
  },
  View_I155_2803_12_157: {
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
  View_I155_2803_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08854166666666607%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I155_2803_12_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3333333432674408,
    textTransform: "none"
  },
  View_155_2911: {
    width: wp("93.60000000000001%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("82.65027322404372%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2911_111_1503: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2911_111_1504: {
    width: wp("93.60000000000001%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I155_2911_111_1505: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.0491803278688536%")
  },
  View_I155_2911_111_1506: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999997%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_I155_2911_111_1506: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2919: {
    width: wp("93.06666666666666%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("116.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I155_2919_41_546: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I155_2919_41_547: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  View_I155_2919_41_548: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("3.9617486338797647%"),
    justifyContent: "flex-start"
  },
  Text_I155_2919_41_548: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I155_2919_41_549: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("-0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_I155_2919_41_549: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I155_2919_41_550: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.300546448087417%")
  },
  View_I155_2919_41_541: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I155_2919_41_542: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  View_I155_2919_41_543: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("3.9617486338797647%"),
    justifyContent: "flex-start"
  },
  Text_I155_2919_41_543: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I155_2919_41_545: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.300546448087417%")
  },
  View_I155_2919_41_536: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I155_2919_41_537: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  View_I155_2919_41_538: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("3.9617486338797647%"),
    justifyContent: "flex-start"
  },
  Text_I155_2919_41_538: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I155_2919_41_540: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.300546448087417%")
  },
  View_I155_2919_41_531: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I155_2919_41_532: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  ImageBackground_I155_2919_41_535: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.300546448087417%")
  },
  TouchableOpacity_155_2937: {
    width: wp("36.266666666666666%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.266666666666666%"),
    top: hp("142.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_155_2938: {
    width: wp("36.266666666666666%"),
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
  View_155_2940: {
    width: wp("12.489184570312501%"),
    height: hp("2.459016393442623%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.808333333333337%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_155_2941: {
    width: wp("28.799999999999997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.275000000000006%"),
    top: hp("-2.0491803278688394%"),
    justifyContent: "center"
  },
  Text_155_2941: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_155_2942: {
    width: wp("36.266666666666666%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("142.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_155_2943: {
    width: wp("36.266666666666666%"),
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
  View_155_2944: {
    width: wp("12.489184570312501%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.808333333333332%"),
    top: hp("2.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_155_2945: {
    width: wp("28.799999999999997%"),
    top: hp("-2.0491803278688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.608333333333333%"),
    justifyContent: "center"
  },
  Text_155_2945: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
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
