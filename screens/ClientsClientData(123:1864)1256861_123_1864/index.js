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
      <View style={styles.View_123_1866}>
        <View style={styles.View_I123_1866_12_9}>
          <Text style={styles.Text_I123_1866_12_9}>Clients Information</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/657e/3819/42609252a2b043e4dd8d70ad7da439b3"
        }}
        style={styles.ImageBackground_123_1867}
      />
      <View style={styles.View_123_1868}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ea0/b66c/e753fd9388a7381542efacb8b4cc2bc5"
          }}
          style={styles.ImageBackground_I123_1868_54_885}
        />
        <View style={styles.View_I123_1868_54_886}>
          <Text style={styles.Text_I123_1868_54_886}>Add Photo ID</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f77/94fb/b2e5673efaa17467a31d2e940dab8306"
        }}
        style={styles.ImageBackground_123_1869}
      />
      <View style={styles.View_123_1871}>
        <View style={styles.View_I123_1871_49_925}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8133/ebc8/7823e3964e22e8eeeb75c613c99fb312"
            }}
            style={styles.ImageBackground_I123_1871_49_926}
          />
          <View style={styles.View_I123_1871_49_927}>
            <Text style={styles.Text_I123_1871_49_927}>Choose File</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89ea/e6f8/0179b8621af82b1f39de5b4344901397"
          }}
          style={styles.ImageBackground_I123_1871_56_885}
        />
        <View style={styles.View_I123_1871_49_922}>
          <Text style={styles.Text_I123_1871_49_922}>No file selected</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c74/26eb/ff58f3272b451995e9615d34627bdcd9"
        }}
        style={styles.ImageBackground_123_1872}
      />
      <View style={styles.View_123_1873}>
        <Text style={styles.Text_123_1873}>Click Photo</Text>
      </View>
      <View style={styles.View_123_1874}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0832/1aa8/e79d01380c70ba88f19299f3efb34421"
          }}
          style={styles.ImageBackground_I123_1874_54_885}
        />
        <View style={styles.View_I123_1874_54_886}>
          <Text style={styles.Text_I123_1874_54_886}>Face Verification</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fffc/3b52/9abb6ebe280b6c7f583d3e7e8e9c9cde"
        }}
        style={styles.ImageBackground_123_1875}
      />
      <View style={styles.View_123_1880}>
        <View style={styles.View_123_1881} />
        <View style={styles.View_123_1882}>
          <Text style={styles.Text_123_1882}>NEXT</Text>
        </View>
      </View>
      <View style={styles.View_123_1883}>
        <View style={styles.View_I123_1883_82_1018} />
      </View>
      <View style={styles.View_123_1928}>
        <View style={styles.View_I123_1928_40_484} />
        <View style={styles.View_I123_1928_40_485}>
          <Text style={styles.Text_I123_1928_40_485}>mm/dd/yyyy</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4afc/9a26/4704239820e3f03fdc7bab815dbeb8ab"
          }}
          style={styles.ImageBackground_I123_1928_40_486}
        />
      </View>
      <View style={styles.View_123_1933}>
        <Text style={styles.Text_123_1933}>DOB</Text>
      </View>
      <View style={styles.View_123_1934}>
        <View style={styles.View_I123_1934_19_95}>
          <View style={styles.View_I123_1934_19_96}>
            <View style={styles.View_I123_1934_19_97}>
              <Text style={styles.Text_I123_1934_19_97}>Nationality</Text>
            </View>
            <View style={styles.View_I123_1934_19_98} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I123_1934_19_99}
            />
            <View style={styles.View_I123_1934_19_100}>
              <Text style={styles.Text_I123_1934_19_100}>Typing|</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I123_1934_19_89}>
          <View style={styles.View_I123_1934_19_90}>
            <View style={styles.View_I123_1934_19_92} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I123_1934_19_93}
            />
            <View style={styles.View_I123_1934_19_94}>
              <Text style={styles.Text_I123_1934_19_94}>
                Placeholder text...
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I123_1934_19_83}>
          <View style={styles.View_I123_1934_19_84}>
            <View style={styles.View_I123_1934_19_86} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7efc/9187/38ae7f31b81e8f4ce33e32b888336e4f"
              }}
              style={styles.ImageBackground_I123_1934_19_87}
            />
            <View style={styles.View_I123_1934_19_88}>
              <Text style={styles.Text_I123_1934_19_88}>Select...</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_123_1951}>
        <View style={styles.View_I123_1951_41_546}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0371/43b4/5d8fd12cb65f76eda9a56cda894ecf09"
            }}
            style={styles.ImageBackground_I123_1951_41_547}
          />
          <View style={styles.View_I123_1951_41_548}>
            <Text style={styles.Text_I123_1951_41_548}>
              Placeholder text...
            </Text>
          </View>
          <View style={styles.View_I123_1951_41_549}>
            <Text style={styles.Text_I123_1951_41_549}>Address</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I123_1951_41_550}
          />
        </View>
        <View style={styles.View_I123_1951_41_541}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c4/9a23/308b2368a810896f8acfb78a50c63558"
            }}
            style={styles.ImageBackground_I123_1951_41_542}
          />
          <View style={styles.View_I123_1951_41_543}>
            <Text style={styles.Text_I123_1951_41_543}>
              Placeholder text...
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I123_1951_41_545}
          />
        </View>
        <View style={styles.View_I123_1951_41_536}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e0a/bbc5/06d8bfa7dcfe5710d63b7dc9e7086894"
            }}
            style={styles.ImageBackground_I123_1951_41_537}
          />
          <View style={styles.View_I123_1951_41_538}>
            <Text style={styles.Text_I123_1951_41_538}>Typing|</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I123_1951_41_540}
          />
        </View>
        <View style={styles.View_I123_1951_41_531}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b3d/22c3/a87b176122410b57fa4feb369aeffe14"
            }}
            style={styles.ImageBackground_I123_1951_41_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c785/e860/fadf0d2bc64af502aa374759565b7924"
            }}
            style={styles.ImageBackground_I123_1951_41_535}
          />
        </View>
      </View>
      <View style={styles.View_123_1968}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b5e/bb4f/87d7f7d2432c76cb3f5d275ea82092cc"
          }}
          style={styles.ImageBackground_123_1969}
        />
        <View style={styles.View_123_1970}>
          <Text style={styles.Text_123_1970}>Add Address Proof (optional)</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a182/0750/94ede804b8d6df220cfb3e22e0dd6a6b"
          }}
          style={styles.ImageBackground_123_1971}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e0a/1524/3edf82b0df80ffbe695b85125e525ddf"
        }}
        style={styles.ImageBackground_125_1685}
      />
      <View style={styles.View_123_1884}>
        <View style={styles.View_I123_1884_12_141}>
          <View style={styles.View_I123_1884_12_142}>
            <View style={styles.View_I123_1884_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I123_1884_12_144}
            />
            <View style={styles.View_I123_1884_12_145} />
          </View>
          <View style={styles.View_I123_1884_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fee/9e86/92da37511c5df705e82285af379e3659"
              }}
              style={styles.ImageBackground_I123_1884_12_147}
            />
          </View>
          <View style={styles.View_I123_1884_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_I123_1884_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I123_1884_12_157}>
          <View style={styles.View_I123_1884_12_158}>
            <Text style={styles.Text_I123_1884_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("200.40983606557376%") },
  View_123_1866: {
    width: wp("39.46666666666667%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("14.344262295081966%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1866_12_9: {
    flexGrow: 1,
    width: wp("60.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "center"
  },
  Text_I123_1866_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.36,
    textTransform: "none"
  },
  ImageBackground_123_1867: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("9.972677595628415%")
  },
  View_123_1868: {
    width: wp("90.1788818359375%"),
    height: hp("6.775950864364541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("23.08743169398907%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1868_54_885: {
    flexGrow: 1,
    width: wp("90.1556884765625%"),
    height: hp("0.08197197171508289%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.023437499999999112%"),
    top: hp("6.693989071038249%")
  },
  View_I123_1868_54_886: {
    flexGrow: 1,
    width: wp("36.2784423828125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2723958333333325%"),
    top: hp("1.6844369023224033%"),
    justifyContent: "flex-start"
  },
  Text_I123_1868_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_123_1869: {
    width: wp("33.49866943359375%"),
    height: hp("10.519126725327121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("34.01639344262295%")
  },
  View_123_1871: {
    width: wp("66.41835530598958%"),
    height: hp("5.388233309886495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("48.63387978142077%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1871_49_925: {
    flexGrow: 1,
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.933333333333335%"),
    top: hp("0.037621670081961156%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1871_49_926: {
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I123_1871_49_927: {
    width: wp("32.018408203125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I123_1871_49_927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_1871_56_885: {
    flexGrow: 1,
    width: wp("32.018408203125%"),
    height: hp("5.3569559191094065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("-0.005469817281422706%")
  },
  View_I123_1871_49_922: {
    flexGrow: 1,
    width: wp("29.085078938802084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666666%"),
    top: hp("-0.004802766393446234%"),
    justifyContent: "center"
  },
  Text_I123_1871_49_922: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_123_1872: {
    width: wp("36.018408203125%"),
    height: hp("6.076368738393315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.800000000000004%"),
    top: hp("86.88524590163934%")
  },
  View_123_1873: {
    width: wp("20.533333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("88.66120218579235%"),
    justifyContent: "center"
  },
  Text_123_1873: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1874: {
    width: wp("91.15923665364583%"),
    height: hp("6.776842002660199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("59.83606557377049%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1874_54_885: {
    flexGrow: 1,
    width: wp("91.13605143229167%"),
    height: hp("0.08286333800665016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0234375%"),
    top: hp("6.693989071038253%")
  },
  View_I123_1874_54_886: {
    flexGrow: 1,
    width: wp("44.811763509114584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.272395833333333%"),
    top: hp("1.6776329832650347%"),
    justifyContent: "flex-start"
  },
  Text_I123_1874_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_123_1875: {
    width: wp("36.266666666666666%"),
    height: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.86666666666667%"),
    top: hp("70.76502732240438%")
  },
  View_123_1880: {
    width: wp("36.024556477864586%"),
    height: hp("7.136546067201374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_123_1881: {
    width: wp("36.024556477864586%"),
    height: hp("7.136546067201374%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(143, 143, 143, 1)",
    borderColor: "rgba(218, 218, 218, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_123_1882: {
    width: wp("23.373451741536456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.589583333333337%"),
    top: hp("1.5482251109972651%"),
    justifyContent: "center"
  },
  Text_123_1882: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.72,
    textTransform: "uppercase"
  },
  View_123_1883: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    height: hp("52.732240437158474%"),
    minHeight: hp("52.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96.26666666666667%"),
    top: hp("66.12021857923497%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1883_82_1018: {
    flexGrow: 1,
    width: wp("2.4%"),
    height: hp("52.732240437158474%"),
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
  View_123_1928: {
    width: wp("90.13333333333333%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("106.4207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1928_40_484: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(210, 210, 210, 1)",
    borderWidth: 1
  },
  View_I123_1928_40_485: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_I123_1928_40_485: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_1928_40_486: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("1.7759562841530112%")
  },
  View_123_1933: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("100.27322404371584%"),
    justifyContent: "flex-start"
  },
  Text_123_1933: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1934: {
    width: wp("89.60000000000001%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("119.12568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1934_19_95: {
    flexGrow: 1,
    width: wp("89.60000000000001%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1934_19_96: {
    width: wp("89.60000000000001%"),
    height: hp("10.655737704918032%"),
    top: hp("-0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I123_1934_19_97: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I123_1934_19_97: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I123_1934_19_98: {
    width: wp("89.60000000000001%"),
    height: hp("6.557377049180328%"),
    top: hp("4.098360655737693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(63, 162, 247, 1)",
    borderWidth: 1
  },
  ImageBackground_I123_1934_19_99: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333334%"),
    top: hp("6.557377049180317%")
  },
  View_I123_1934_19_100: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("5.737704918032776%"),
    justifyContent: "flex-start"
  },
  Text_I123_1934_19_100: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I123_1934_19_89: {
    flexGrow: 1,
    width: wp("89.60000000000001%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1934_19_90: {
    width: wp("89.60000000000001%"),
    height: hp("6.557377049180328%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I123_1934_19_92: {
    width: wp("89.60000000000001%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(235, 87, 87, 1)",
    borderWidth: 1
  },
  ImageBackground_I123_1934_19_93: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333334%"),
    top: hp("2.4590163934426243%")
  },
  View_I123_1934_19_94: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I123_1934_19_94: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I123_1934_19_83: {
    flexGrow: 1,
    width: wp("89.60000000000001%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1934_19_84: {
    width: wp("89.60000000000001%"),
    height: hp("6.557377049180328%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I123_1934_19_86: {
    width: wp("89.60000000000001%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  ImageBackground_I123_1934_19_87: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333334%"),
    top: hp("2.4590163934426243%")
  },
  View_I123_1934_19_88: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.199999999999999%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_I123_1934_19_88: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1951: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("136.61202185792348%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1951_41_546: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1951_41_547: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_I123_1951_41_548: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666655%"),
    top: hp("3.9617486338798074%"),
    justifyContent: "flex-start"
  },
  Text_I123_1951_41_548: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I123_1951_41_549: {
    width: wp("70.93333333333334%"),
    minWidth: wp("70.93333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666616%"),
    top: hp("-0.2732240437158282%"),
    justifyContent: "flex-start"
  },
  Text_I123_1951_41_549: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_1951_41_550: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661216%")
  },
  View_I123_1951_41_541: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1951_41_542: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_I123_1951_41_543: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666655%"),
    top: hp("3.9617486338798074%"),
    justifyContent: "flex-start"
  },
  Text_I123_1951_41_543: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_1951_41_545: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661216%")
  },
  View_I123_1951_41_536: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1951_41_537: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  View_I123_1951_41_538: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666655%"),
    top: hp("3.9617486338798074%"),
    justifyContent: "flex-start"
  },
  Text_I123_1951_41_538: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_1951_41_540: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661216%")
  },
  View_I123_1951_41_531: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1951_41_532: {
    width: wp("90.13333333333333%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005527%")
  },
  ImageBackground_I123_1951_41_535: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.66666666666667%"),
    top: hp("15.710382513661216%")
  },
  View_123_1968: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("156.9672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_123_1969: {
    width: wp("52.53333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_123_1970: {
    width: wp("42.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666666%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_123_1970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_123_1971: {
    width: wp("3.337621815999349%"),
    height: hp("3.0433321259712263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("1.5027322404371546%")
  },
  ImageBackground_125_1685: {
    width: wp("25.866666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.866666666666667%"),
    top: hp("4.371584699453552%")
  },
  View_123_1884: {
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
  View_I123_1884_12_141: {
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
  View_I123_1884_12_142: {
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
  View_I123_1884_12_143: {
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
  ImageBackground_I123_1884_12_144: {
    width: wp("0.35555556615193684%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5464480874316937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%")
  },
  View_I123_1884_12_145: {
    width: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    top: hp("0.31871691427595605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I123_1884_12_146: {
    width: wp("5.6000000000000005%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I123_1884_12_147: {
    width: wp("4.088888804117839%"),
    height: hp("1.5027322404371584%"),
    top: hp("0.18210489241803263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7109375%")
  },
  View_I123_1884_12_151: {
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
  ImageBackground_I123_1884_12_152: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09111915129781423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17760416666666856%")
  },
  View_I123_1884_12_157: {
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
  View_I123_1884_12_158: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08906249999999982%"),
    top: hp("0.819672131147541%"),
    justifyContent: "flex-start"
  },
  Text_I123_1884_12_158: {
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
