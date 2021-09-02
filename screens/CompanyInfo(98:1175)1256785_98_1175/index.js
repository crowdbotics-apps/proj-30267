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
      <View style={styles.View_98_1176} />
      <View style={styles.View_98_1177}>
        <View style={styles.View_I98_1177_12_9}>
          <Text style={styles.Text_I98_1177_12_9}>Company Information</Text>
        </View>
      </View>
      <View style={styles.View_98_1181}>
        <View style={styles.View_I98_1181_24_62}>
          <View style={styles.View_I98_1181_24_63} />
          <View style={styles.View_I98_1181_24_64}>
            <Text style={styles.Text_I98_1181_24_64}>Company Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_98_1183}>
        <View style={styles.View_I98_1183_19_95}>
          <View style={styles.View_I98_1183_19_96}>
            <View style={styles.View_I98_1183_19_97}>
              <Text style={styles.Text_I98_1183_19_97}>
                Business Registered Country
              </Text>
            </View>
            <View style={styles.View_I98_1183_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1183_19_99}
            />
            <View style={styles.View_I98_1183_19_100}>
              <Text style={styles.Text_I98_1183_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I98_1183_19_89}>
          <View style={styles.View_I98_1183_19_90}>
            <View style={styles.View_I98_1183_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1183_19_93}
            />
            <View style={styles.View_I98_1183_19_94}>
              <Text style={styles.Text_I98_1183_19_94}>
                Placeholder text...
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I98_1183_19_83}>
          <View style={styles.View_I98_1183_19_84}>
            <View style={styles.View_I98_1183_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1183_19_87}
            />
            <View style={styles.View_I98_1183_19_88}>
              <Text style={styles.Text_I98_1183_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_98_1257}>
        <View style={styles.View_I98_1257_19_95}>
          <View style={styles.View_I98_1257_19_96}>
            <View style={styles.View_I98_1257_19_97}>
              <Text style={styles.Text_I98_1257_19_97}>Business Category</Text>
            </View>
            <View style={styles.View_I98_1257_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1257_19_99}
            />
            <View style={styles.View_I98_1257_19_100}>
              <Text style={styles.Text_I98_1257_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I98_1257_19_89}>
          <View style={styles.View_I98_1257_19_90}>
            <View style={styles.View_I98_1257_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1257_19_93}
            />
            <View style={styles.View_I98_1257_19_94}>
              <Text style={styles.Text_I98_1257_19_94}>
                Placeholder text...
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I98_1257_19_83}>
          <View style={styles.View_I98_1257_19_84}>
            <View style={styles.View_I98_1257_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1257_19_87}
            />
            <View style={styles.View_I98_1257_19_88}>
              <Text style={styles.Text_I98_1257_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_98_1275}>
        <View style={styles.View_I98_1275_19_95}>
          <View style={styles.View_I98_1275_19_96}>
            <View style={styles.View_I98_1275_19_97}>
              <Text style={styles.Text_I98_1275_19_97}>
                Business Sub-Category
              </Text>
            </View>
            <View style={styles.View_I98_1275_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1275_19_99}
            />
            <View style={styles.View_I98_1275_19_100}>
              <Text style={styles.Text_I98_1275_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I98_1275_19_89}>
          <View style={styles.View_I98_1275_19_90}>
            <View style={styles.View_I98_1275_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1275_19_93}
            />
            <View style={styles.View_I98_1275_19_94}>
              <Text style={styles.Text_I98_1275_19_94}>
                Placeholder text...
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I98_1275_19_83}>
          <View style={styles.View_I98_1275_19_84}>
            <View style={styles.View_I98_1275_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I98_1275_19_87}
            />
            <View style={styles.View_I98_1275_19_88}>
              <Text style={styles.Text_I98_1275_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_98_1178}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("98_1420"))
        }
      >
        <View style={styles.View_98_1179} />
        <View style={styles.View_98_1180}>
          <Text style={styles.Text_98_1180}>CONTINUE</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_98_1383}>
        <View style={styles.View_I98_1383_41_546}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b573/3df8/5f91f8a4eeae3d7a905478239cb3f892"
            }}
            style={styles.ImageBackground_I98_1383_41_547}
          />
          <View style={styles.View_I98_1383_41_548}>
            <Text style={styles.Text_I98_1383_41_548}>Placeholder text...</Text>
          </View>
          <View style={styles.View_I98_1383_41_549}>
            <Text style={styles.Text_I98_1383_41_549}>
              Business Description
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1383_41_550}
          />
        </View>
        <View style={styles.View_I98_1383_41_541}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83d8/9804/d7f8212ed447c1229fd577ea4b4e5f53"
            }}
            style={styles.ImageBackground_I98_1383_41_542}
          />
          <View style={styles.View_I98_1383_41_543}>
            <Text style={styles.Text_I98_1383_41_543}>Placeholder text...</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1383_41_545}
          />
        </View>
        <View style={styles.View_I98_1383_41_536}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/255d/c6e9/83ba2faeff343acc723aef02b323abc6"
            }}
            style={styles.ImageBackground_I98_1383_41_537}
          />
          <View style={styles.View_I98_1383_41_538}>
            <Text style={styles.Text_I98_1383_41_538}>Typing|</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1383_41_540}
          />
        </View>
        <View style={styles.View_I98_1383_41_531}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cecc/4913/f3365b435231ecf158994426a9bccfe9"
            }}
            style={styles.ImageBackground_I98_1383_41_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1383_41_535}
          />
        </View>
      </View>
      <View style={styles.View_98_1418}>
        <Text style={styles.Text_98_1418}>(minimum 20 words)</Text>
      </View>
      <View style={styles.View_98_1296}>
        <View style={styles.View_I98_1296_24_62}>
          <View style={styles.View_I98_1296_24_63} />
          <View style={styles.View_I98_1296_24_64}>
            <Text style={styles.Text_I98_1296_24_64}>
              Business Website(optional)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_98_1400}>
        <View style={styles.View_I98_1400_41_546}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2d7/e7e5/9dd29919c68ed7639375a2fae37a7af7"
            }}
            style={styles.ImageBackground_I98_1400_41_547}
          />
          <View style={styles.View_I98_1400_41_548}>
            <Text style={styles.Text_I98_1400_41_548}>Placeholder text...</Text>
          </View>
          <View style={styles.View_I98_1400_41_549}>
            <Text style={styles.Text_I98_1400_41_549}>Business Address</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1400_41_550}
          />
        </View>
        <View style={styles.View_I98_1400_41_541}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50d5/d38d/5e36dc7699704be39b55f6f48df032c6"
            }}
            style={styles.ImageBackground_I98_1400_41_542}
          />
          <View style={styles.View_I98_1400_41_543}>
            <Text style={styles.Text_I98_1400_41_543}>Placeholder text...</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1400_41_545}
          />
        </View>
        <View style={styles.View_I98_1400_41_536}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0edc/77b7/8091833778edfb727ad6773b7c28a858"
            }}
            style={styles.ImageBackground_I98_1400_41_537}
          />
          <View style={styles.View_I98_1400_41_538}>
            <Text style={styles.Text_I98_1400_41_538}>Typing|</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1400_41_540}
          />
        </View>
        <View style={styles.View_I98_1400_41_531}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d4/291a/cc2361c5b95b6ee23074e26ef9b5ce83"
            }}
            style={styles.ImageBackground_I98_1400_41_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I98_1400_41_535}
          />
        </View>
      </View>
      <View style={styles.View_98_1513}>
        <View style={styles.View_I98_1513_82_1018} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_179_4625}
      />
      <View style={styles.View_98_1185}>
        <View style={styles.View_I98_1185_12_141}>
          <View style={styles.View_I98_1185_12_142}>
            <View style={styles.View_I98_1185_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I98_1185_12_144}
            />
            <View style={styles.View_I98_1185_12_145} />
          </View>
          <View style={styles.View_I98_1185_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I98_1185_12_147}
            />
          </View>
          <View style={styles.View_I98_1185_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I98_1185_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I98_1185_12_157}>
          <View style={styles.View_I98_1185_12_158}>
            <Text style={styles.Text_I98_1185_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("176.50273224043715%") },
  View_98_1176: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("176.50273224043715%"),
    minHeight: hp("176.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_98_1177: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599999999999998%"),
    top: hp("14.344262295081966%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1177_12_9: {
    flexGrow: 1,
    width: wp("69.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I98_1177_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  View_98_1181: {
    width: wp("93.06666666666666%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("28.142076502732237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1181_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1181_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I98_1181_24_64: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.7759562841530077%"),
    justifyContent: "flex-start"
  },
  Text_I98_1181_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_1183: {
    width: wp("93.06666666666666%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("39.20765027322404%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1183_19_95: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1183_19_96: {
    width: wp("93.06666666666666%"),
    height: hp("9.562841530054644%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1183_19_97: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I98_1183_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1183_19_98: {
    width: wp("93.06666666666666%"),
    height: hp("5.8671273820387215%"),
    top: hp("3.695728739754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1183_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("6.010928961748633%")
  },
  View_I98_1183_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("5.191256830601091%"),
    justifyContent: "flex-start"
  },
  Text_I98_1183_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1183_19_89: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1183_19_90: {
    width: wp("93.06666666666666%"),
    height: hp("5.8671273820387215%"),
    top: hp("3.422504696038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1183_19_92: {
    width: wp("93.06666666666666%"),
    height: hp("5.8671273820387215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 87, 87, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1183_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.3152002219945373%")
  },
  View_I98_1183_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.495528090846996%"),
    justifyContent: "flex-start"
  },
  Text_I98_1183_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1183_19_83: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1183_19_84: {
    width: wp("93.06666666666666%"),
    height: hp("5.8671273820387215%"),
    top: hp("3.422504696038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1183_19_86: {
    width: wp("93.06666666666666%"),
    height: hp("5.8671273820387215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1183_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.3152002219945373%")
  },
  View_I98_1183_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.495528090846996%"),
    justifyContent: "flex-start"
  },
  Text_I98_1183_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_1257: {
    width: wp("93.33333333333333%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("54.37158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1257_19_95: {
    flexGrow: 1,
    width: wp("93.33333333333333%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1257_19_96: {
    width: wp("93.33333333333333%"),
    height: hp("10.51912568306011%"),
    top: hp("-0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1257_19_97: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I98_1257_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1257_19_98: {
    width: wp("93.33333333333333%"),
    height: hp("6.47109610135438%"),
    top: hp("4.047998313695359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1257_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666666%"),
    top: hp("6.5573770491803245%")
  },
  View_I98_1257_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("5.737704918032783%"),
    justifyContent: "flex-start"
  },
  Text_I98_1257_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1257_19_89: {
    flexGrow: 1,
    width: wp("93.33333333333333%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1257_19_90: {
    width: wp("93.33333333333333%"),
    height: hp("6.47109610135438%"),
    top: hp("3.7747742699795097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1257_19_92: {
    width: wp("93.33333333333333%"),
    height: hp("6.47109610135438%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 87, 87, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1257_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666666%"),
    top: hp("2.5093787354849653%")
  },
  View_I98_1257_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.6897066043374238%"),
    justifyContent: "flex-start"
  },
  Text_I98_1257_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1257_19_83: {
    flexGrow: 1,
    width: wp("93.33333333333333%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1257_19_84: {
    width: wp("93.33333333333333%"),
    height: hp("6.47109610135438%"),
    top: hp("3.7747742699795097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1257_19_86: {
    width: wp("93.33333333333333%"),
    height: hp("6.47109610135438%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1257_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666666%"),
    top: hp("2.5093787354849653%")
  },
  View_I98_1257_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.6897066043374238%"),
    justifyContent: "flex-start"
  },
  Text_I98_1257_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_1275: {
    width: wp("93.06666666666666%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("71.31147540983606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1275_19_95: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1275_19_96: {
    width: wp("93.06666666666666%"),
    height: hp("10.51912568306011%"),
    top: hp("-0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1275_19_97: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I98_1275_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1275_19_98: {
    width: wp("93.06666666666666%"),
    height: hp("6.47109610135438%"),
    top: hp("4.047998313695359%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1275_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("6.557377049180317%")
  },
  View_I98_1275_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_I98_1275_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1275_19_89: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1275_19_90: {
    width: wp("93.06666666666666%"),
    height: hp("6.47109610135438%"),
    top: hp("3.774774269979517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1275_19_92: {
    width: wp("93.06666666666666%"),
    height: hp("6.47109610135438%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 87, 87, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1275_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.509378735484958%")
  },
  View_I98_1275_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.6897066043374167%"),
    justifyContent: "flex-start"
  },
  Text_I98_1275_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1275_19_83: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1275_19_84: {
    width: wp("93.06666666666666%"),
    height: hp("6.47109610135438%"),
    top: hp("3.774774269979517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_1275_19_86: {
    width: wp("93.06666666666666%"),
    height: hp("6.47109610135438%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I98_1275_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.39999999999999%"),
    top: hp("2.509378735484958%")
  },
  View_I98_1275_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.6897066043374167%"),
    justifyContent: "flex-start"
  },
  Text_I98_1275_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_98_1178: {
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("155.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_98_1179: {
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
  View_98_1180: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.876562500000006%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "center"
  },
  Text_98_1180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_98_1383: {
    width: wp("93.60000000000001%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("88.25136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1383_41_546: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_1383_41_547: {
    width: wp("93.60000000000001%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  View_I98_1383_41_548: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666672%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_I98_1383_41_548: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1383_41_549: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666705%"),
    top: hp("-0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I98_1383_41_549: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I98_1383_41_550: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("15.710382513661216%")
  },
  View_I98_1383_41_541: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_1383_41_542: {
    width: wp("93.60000000000001%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  View_I98_1383_41_543: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666672%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_I98_1383_41_543: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I98_1383_41_545: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("15.710382513661216%")
  },
  View_I98_1383_41_536: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_1383_41_537: {
    width: wp("93.60000000000001%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  View_I98_1383_41_538: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666672%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_I98_1383_41_538: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I98_1383_41_540: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("15.710382513661216%")
  },
  View_I98_1383_41_531: {
    flexGrow: 1,
    width: wp("93.60000000000001%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_1383_41_532: {
    width: wp("93.60000000000001%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005384%")
  },
  ImageBackground_I98_1383_41_535: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("15.710382513661216%")
  },
  View_98_1418: {
    width: wp("39.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("92.21311475409836%"),
    justifyContent: "flex-start"
  },
  Text_98_1418: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_1296: {
    width: wp("93.06666666666666%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("114.07103825136613%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1296_24_62: {
    flexGrow: 1,
    width: wp("93.06666666666666%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1296_24_63: {
    width: wp("93.06666666666666%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_I98_1296_24_64: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2000000000000006%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_I98_1296_24_64: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_98_1400: {
    width: wp("93.06666666666666%"),
    height: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("128.0054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1400_41_546: {
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
  ImageBackground_I98_1400_41_547: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_I98_1400_41_548: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_I98_1400_41_548: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_1400_41_549: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("-0.2732240437158424%"),
    justifyContent: "flex-start"
  },
  Text_I98_1400_41_549: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I98_1400_41_550: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.30054644808746%")
  },
  View_I98_1400_41_541: {
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
  ImageBackground_I98_1400_41_542: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_I98_1400_41_543: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_I98_1400_41_543: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I98_1400_41_545: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.30054644808746%")
  },
  View_I98_1400_41_536: {
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
  ImageBackground_I98_1400_41_537: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_I98_1400_41_538: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_I98_1400_41_538: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I98_1400_41_540: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.30054644808746%")
  },
  View_I98_1400_41_531: {
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
  ImageBackground_I98_1400_41_532: {
    width: wp("93.06666666666666%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  ImageBackground_I98_1400_41_535: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.6%"),
    top: hp("15.30054644808746%")
  },
  View_98_1513: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.86666666666667%"),
    top: hp("47.13114754098361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1513_82_1018: {
    flexGrow: 1,
    width: wp("1.0666666666666667%"),
    height: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  ImageBackground_179_4625: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("4.371584699453552%")
  },
  View_98_1185: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I98_1185_12_141: {
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
  View_I98_1185_12_142: {
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
  View_I98_1185_12_143: {
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
  ImageBackground_I98_1185_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I98_1185_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.3187502668203548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I98_1185_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_1185_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18213824496243136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7109375%")
  },
  View_I98_1185_12_151: {
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
  ImageBackground_I98_1185_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09108579875341549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17760416666666856%")
  },
  View_I98_1185_12_157: {
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
  View_I98_1185_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08906249999999982%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I98_1185_12_158: {
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
