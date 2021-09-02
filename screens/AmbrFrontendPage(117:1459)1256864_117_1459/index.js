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
      <View style={styles.View_119_1471}>
        <View style={styles.View_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db8/279a/0655bd4260d273b4c01af3478178a549"
          }}
          style={styles.ImageBackground_119_1474}
        />
      </View>
      <View style={styles.View_121_1510}>
        <View style={styles.View_I121_1510_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_I121_1510_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f04/688f/1deef5b4db6712f033e563c78990faf2"
          }}
          style={styles.ImageBackground_I121_1510_119_1474}
        />
      </View>
      <View style={styles.View_121_1522}>
        <View style={styles.View_I121_1522_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_I121_1522_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f04/688f/1deef5b4db6712f033e563c78990faf2"
          }}
          style={styles.ImageBackground_I121_1522_119_1474}
        />
      </View>
      <View style={styles.View_121_1526}>
        <View style={styles.View_I121_1526_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_I121_1526_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db8/279a/0655bd4260d273b4c01af3478178a549"
          }}
          style={styles.ImageBackground_I121_1526_119_1474}
        />
      </View>
      <View style={styles.View_121_1530}>
        <View style={styles.View_I121_1530_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_I121_1530_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db8/279a/0655bd4260d273b4c01af3478178a549"
          }}
          style={styles.ImageBackground_I121_1530_119_1474}
        />
      </View>
      <View style={styles.View_121_1514}>
        <View style={styles.View_I121_1514_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_I121_1514_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f04/688f/1deef5b4db6712f033e563c78990faf2"
          }}
          style={styles.ImageBackground_I121_1514_119_1474}
        />
      </View>
      <View style={styles.View_121_1518}>
        <View style={styles.View_I121_1518_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_I121_1518_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f04/688f/1deef5b4db6712f033e563c78990faf2"
          }}
          style={styles.ImageBackground_I121_1518_119_1474}
        />
      </View>
      <View style={styles.View_119_1480}>
        <View style={styles.View_I119_1480_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96eb/9202/2c62864445d83e8c667ce67ce60b7a25"
          }}
          style={styles.ImageBackground_I119_1480_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db8/279a/0655bd4260d273b4c01af3478178a549"
          }}
          style={styles.ImageBackground_I119_1480_119_1474}
        />
      </View>
      <View style={styles.View_119_1484}>
        <View style={styles.View_I119_1484_119_1472} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cafd/982a/018f7d8edf061d64b2e4d1a4a05b2cba"
          }}
          style={styles.ImageBackground_I119_1484_119_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c426/aa3e/68651209f2f29232076e6b0fd871b5b9"
          }}
          style={styles.ImageBackground_I119_1484_119_1474}
        />
      </View>
      <View style={styles.View_117_1461}>
        <View style={styles.View_I117_1461_12_9}>
          <Text text="" style={styles.Text_I117_1461_12_9} />
        </View>
      </View>
      <View style={styles.View_118_1468}>
        <View style={styles.View_118_1469} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ca6/9fe7/6a68242fb9f1975bbf4148a328b1c491"
          }}
          style={styles.ImageBackground_118_1470}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fd6/e3ab/917e1e542255223e00705cf78235ff78"
          }}
          style={styles.ImageBackground_118_1471}
        />
      </View>
      <View style={styles.View_118_1472}>
        <View source={{ uri: "null" }} style={styles.View_I118_1472_54_885} />
        <View style={styles.View_I118_1472_54_886}>
          <Text style={styles.Text_I118_1472_54_886}>
            Crossboder Business Payment Account
          </Text>
        </View>
      </View>
      <View style={styles.View_118_1476}>
        <View style={styles.View_I118_1476_12_9}>
          <Text style={styles.Text_I118_1476_12_9}>
            Your business is borderless so is our payment system.
          </Text>
        </View>
      </View>
      <View style={styles.View_119_1475}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c64/5280/10f2fd7581b824c64af0e5def31c6ca7"
          }}
          style={styles.ImageBackground_I119_1475_54_885}
        />
        <View style={styles.View_I119_1475_54_886}>
          <Text text="" style={styles.Text_I119_1475_54_886} />
        </View>
      </View>
      <View style={styles.View_120_1573}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5f1/5efd/a6f15b792a7052172f9e5c518ec9e62c"
          }}
          style={styles.ImageBackground_I120_1573_54_885}
        />
        <View style={styles.View_I120_1573_54_886}>
          <Text text="" style={styles.Text_I120_1573_54_886} />
        </View>
      </View>
      <View style={styles.View_121_1506}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5f1/5efd/a6f15b792a7052172f9e5c518ec9e62c"
          }}
          style={styles.ImageBackground_I121_1506_54_885}
        />
        <View style={styles.View_I121_1506_54_886}>
          <Text text="" style={styles.Text_I121_1506_54_886} />
        </View>
      </View>
      <View style={styles.View_119_1479}>
        <Text style={styles.Text_119_1479}>How we work?</Text>
      </View>
      <View style={styles.View_120_1577}>
        <Text style={styles.Text_120_1577}>Your Money is safe with Ambr!</Text>
      </View>
      <View style={styles.View_121_1505}>
        <Text style={styles.Text_121_1505}>Available Countries </Text>
      </View>
      <View style={styles.View_120_1497}>
        <View style={styles.View_120_1558}>
          <View style={styles.View_120_1565}>
            <View style={styles.View_120_1566} />
          </View>
        </View>
      </View>
      <View style={styles.View_120_1578}>
        <View style={styles.View_I120_1578_120_1558}>
          <View style={styles.View_I120_1578_120_1565}>
            <View style={styles.View_I120_1578_120_1566} />
          </View>
        </View>
      </View>
      <View style={styles.View_120_1587}>
        <View style={styles.View_I120_1587_120_1558}>
          <View style={styles.View_I120_1587_120_1565}>
            <View style={styles.View_I120_1587_120_1566} />
          </View>
        </View>
      </View>
      <View style={styles.View_121_1534}>
        <View style={styles.View_I121_1534_120_1558}>
          <View style={styles.View_I121_1534_120_1565}>
            <View style={styles.View_I121_1534_120_1566} />
          </View>
        </View>
      </View>
      <View style={styles.View_121_1542}>
        <View style={styles.View_I121_1542_120_1558}>
          <View style={styles.View_I121_1542_120_1565}>
            <View style={styles.View_I121_1542_120_1566} />
          </View>
        </View>
      </View>
      <View style={styles.View_121_1550}>
        <View style={styles.View_I121_1550_120_1558}>
          <View style={styles.View_I121_1550_120_1565}>
            <View style={styles.View_I121_1550_120_1566} />
          </View>
        </View>
      </View>
      <View style={styles.View_121_1558}>
        <View style={styles.View_I121_1558_120_1558}>
          <View style={styles.View_I121_1558_120_1565}>
            <View style={styles.View_I121_1558_120_1566} />
          </View>
        </View>
      </View>
      <View style={styles.View_120_1619}>
        <Text style={styles.Text_120_1619}>
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever since.
        </Text>
      </View>
      <View style={styles.View_120_1561}>
        <Text style={styles.Text_120_1561}>
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever since.
        </Text>
      </View>
      <View style={styles.View_121_1502}>
        <Text style={styles.Text_121_1502}>
          Loreum ipsum a dummy text of the printing and typesetting industry.{" "}
        </Text>
      </View>
      <View style={styles.View_121_1503}>
        <Text style={styles.Text_121_1503}>
          Loreum ipsum a dummy text of the printing and typesetting industry.{" "}
        </Text>
      </View>
      <View style={styles.View_121_1504}>
        <Text style={styles.Text_121_1504}>
          Loreum ipsum a dummy text of the printing and typesetting industry.{" "}
        </Text>
      </View>
      <View style={styles.View_120_1618}>
        <Text style={styles.Text_120_1618}>
          Loreum ipsum a dummy text of the printing and typesetting industry.
          Loreum ipsum has been the industry standard dummy text ever since.
        </Text>
      </View>
      <View style={styles.View_121_1501}>
        <Text style={styles.Text_121_1501}>Our Partners</Text>
      </View>
      <View style={styles.View_122_1550} />
      <View style={styles.View_122_1553} />
      <View style={styles.View_122_1555} />
      <View style={styles.View_122_1554}>
        <Text style={styles.Text_122_1554}>LOGIN</Text>
      </View>
      <View style={styles.View_122_1556}>
        <Text style={styles.Text_122_1556}>SIGNUP</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/789a/6255/2c52640d3d6fb4fd97b6e91f511fb1aa"
        }}
        style={styles.ImageBackground_125_1682}
      />
      <View style={styles.View_138_2266}>
        <View style={styles.View_I138_2266_82_1018} />
      </View>
      <View style={styles.View_117_1470}>
        <View style={styles.View_I117_1470_12_141}>
          <View style={styles.View_I117_1470_12_142}>
            <View style={styles.View_I117_1470_12_143} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I117_1470_12_144}
            />
            <View style={styles.View_I117_1470_12_145} />
          </View>
          <View style={styles.View_I117_1470_12_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f918/f8cb/dc74faeb6447f8f51e3b178ef7e563be"
              }}
              style={styles.ImageBackground_I117_1470_12_147}
            />
          </View>
          <View style={styles.View_I117_1470_12_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f610/6c45/6aaa1e19c62634b3e56c4dcb2c1a30eb"
              }}
              style={styles.ImageBackground_I117_1470_12_152}
            />
          </View>
        </View>
        <View style={styles.View_I117_1470_12_157}>
          <View style={styles.View_I117_1470_12_158}>
            <Text style={styles.Text_I117_1470_12_158}>9:27</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("289.2814928065232%") },
  View_119_1471: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.967149596237407%"),
    top: hp("81.4208984375%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327873046%")
  },
  ImageBackground_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015027633%")
  },
  View_121_1510: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.45072439435611%"),
    top: hp("203.14207650273227%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1510_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I121_1510_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327873046%")
  },
  ImageBackground_I121_1510_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015024791%")
  },
  View_121_1522: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.45072439435611%"),
    top: hp("220.62841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1522_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I121_1522_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327873046%")
  },
  ImageBackground_I121_1522_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015030475%")
  },
  View_121_1526: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.30993694965928%"),
    top: hp("220.4919366888661%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1526_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I121_1526_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327873046%")
  },
  ImageBackground_I121_1526_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015030475%")
  },
  View_121_1530: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.16914950496245%"),
    top: hp("220.35519125683058%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1530_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I121_1530_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711217492%"),
    top: hp("0.052830430327873046%")
  },
  ImageBackground_I121_1530_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711217492%"),
    top: hp("0.05269702015030475%")
  },
  View_121_1514: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.30993694965928%"),
    top: hp("203.00559789105193%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1514_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I121_1514_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327844624%")
  },
  ImageBackground_I121_1514_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015024791%")
  },
  View_121_1518: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.67149596237407%"),
    top: hp("203.14207650273227%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1518_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I121_1518_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327873046%")
  },
  ImageBackground_I121_1518_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015024791%")
  },
  View_119_1480: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.82636215154058%"),
    top: hp("81.28428641564209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_1480_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I119_1480_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327858835%")
  },
  ImageBackground_I119_1480_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015026212%")
  },
  View_119_1484: {
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.18322824943213%"),
    top: hp("81.14754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I119_1484_119_1472: {
    flexGrow: 1,
    width: wp("23.38971650165415%"),
    height: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_I119_1484_119_1473: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.052830430327858835%")
  },
  ImageBackground_I119_1484_119_1474: {
    flexGrow: 1,
    width: wp("23.094887759519494%"),
    height: hp("12.409882467301166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09816993711216071%"),
    top: hp("0.05269702015027633%")
  },
  View_117_1461: {
    width: wp("36.95016425315785%"),
    minWidth: wp("36.95016425315785%"),
    height: hp("5.7215998081561645%"),
    minHeight: hp("5.7215998081561645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.441580344629024%"),
    top: hp("14.268218493852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I117_1461_12_9: {
    flexGrow: 1,
    width: wp("0.1394701110015862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.006317867239889807%"),
    top: hp("-0.015608990778687826%"),
    justifyContent: "center"
  },
  Text_I117_1461_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.54,
    textTransform: "none"
  },
  View_118_1468: {
    width: wp("83.63181079567083%"),
    height: hp("18.82031341719497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.967149596237407%"),
    top: hp("46.44808743169399%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_118_1469: {
    flexGrow: 1,
    width: wp("83.63181079567083%"),
    height: hp("18.82031341719497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1
  },
  ImageBackground_118_1470: {
    flexGrow: 1,
    width: wp("82.57762301027998%"),
    height: hp("18.58308302248762%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35137061649550994%"),
    top: hp("0.08071315744535212%")
  },
  ImageBackground_118_1471: {
    flexGrow: 1,
    width: wp("82.57762301027998%"),
    height: hp("18.58307885341957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35137061649550994%"),
    top: hp("0.08071315744535212%")
  },
  View_118_1472: {
    width: wp("71.976279749694%"),
    height: hp("23.56724139771175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.943685022121269%"),
    top: hp("16.803412098702186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I118_1472_54_885: {
    flexGrow: 1,
    width: wp("71.90032106459708%"),
    height: hp("0.07006076515698043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.075814406878699%"),
    top: hp("23.497267759562842%")
  },
  View_I118_1472_54_886: {
    flexGrow: 1,
    width: wp("67.20918314153063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.013303666694231%"),
    top: hp("9.973344646516392%"),
    justifyContent: "flex-start"
  },
  Text_I118_1472_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_1476: {
    width: wp("60.96255896707731%"),
    height: hp("6.557377570313834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.633850358125116%"),
    top: hp("40.43729188012295%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I118_1476_12_9: {
    flexGrow: 1,
    width: wp("77.13629910119985%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14.680779506357393%"),
    top: hp("0.21852587090164377%"),
    justifyContent: "center"
  },
  Text_I118_1476_12_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.18,
    textTransform: "none"
  },
  View_119_1475: {
    width: wp("83.85461433255263%"),
    height: hp("6.636439255677937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.718322824943214%"),
    top: hp("69.94815680498634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I119_1475_54_885: {
    flexGrow: 1,
    width: wp("83.83342821524579%"),
    height: hp("0.08168885779511081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.021383550658094386%"),
    top: hp("6.5547088456284115%")
  },
  View_I119_1475_54_886: {
    flexGrow: 1,
    width: wp("0.007949116367043995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9860882385839274%"),
    top: hp("1.5805103739754003%"),
    justifyContent: "flex-start"
  },
  Text_I119_1475_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_1573: {
    width: wp("84.30899959685628%"),
    height: hp("6.776109288950435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.46949605364902%"),
    top: hp("111.34093237704919%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I120_1573_54_885: {
    flexGrow: 1,
    width: wp("84.28736545771392%"),
    height: hp("0.08213066501044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02186954044577849%"),
    top: hp("6.693989071038246%")
  },
  View_I120_1573_54_886: {
    flexGrow: 1,
    width: wp("0.007949166422449678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9865742283716132%"),
    top: hp("1.7176560365437012%"),
    justifyContent: "flex-start"
  },
  Text_I120_1573_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_1506: {
    width: wp("84.30899959685628%"),
    height: hp("6.776109288950435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.708936995296758%"),
    top: hp("193.30601092896177%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I121_1506_54_885: {
    flexGrow: 1,
    width: wp("84.28736545771392%"),
    height: hp("0.08213066501044185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02186954044577938%"),
    top: hp("6.6939890710382315%")
  },
  View_I121_1506_54_886: {
    flexGrow: 1,
    width: wp("0.007949166422449678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9865742283716123%"),
    top: hp("1.7176560365437012%"),
    justifyContent: "flex-start"
  },
  Text_I121_1506_54_886: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_119_1479: {
    width: wp("44.78881883295476%"),
    minWidth: wp("44.78881883295476%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.37094484236124%"),
    top: hp("71.31160882001366%"),
    justifyContent: "flex-start"
  },
  Text_119_1479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_1577: {
    width: wp("68.92501564849148%"),
    minWidth: wp("68.92501564849148%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.427259820239971%"),
    top: hp("113.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_120_1577: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_1505: {
    width: wp("43.79351174777798%"),
    minWidth: wp("43.79351174777798%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.108039326597364%"),
    top: hp("196.31160882001367%"),
    justifyContent: "flex-start"
  },
  Text_121_1505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_120_1497: {
    width: wp("37.32401569412897%"),
    minWidth: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.967149596237407%"),
    top: hp("121.17499679815573%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_120_1558: {
    flexGrow: 1,
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_120_1565: {
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_120_1566: {
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_120_1578: {
    width: wp("37.32401569412897%"),
    minWidth: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.24423614213409%"),
    top: hp("144.67226455771856%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I120_1578_120_1558: {
    flexGrow: 1,
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I120_1578_120_1565: {
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I120_1578_120_1566: {
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_120_1587: {
    width: wp("37.32401569412897%"),
    minWidth: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.708936995296758%"),
    top: hp("168.98907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I120_1587_120_1558: {
    flexGrow: 1,
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I120_1587_120_1565: {
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I120_1587_120_1566: {
    width: wp("37.32401569412897%"),
    height: hp("20.491803278688526%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_121_1534: {
    width: wp("17.417873990593517%"),
    minWidth: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.45072439435611%"),
    top: hp("250.95641756318307%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1534_120_1558: {
    flexGrow: 1,
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1534_120_1565: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1534_120_1566: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_121_1542: {
    width: wp("17.417873990593517%"),
    minWidth: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.5963070395393%"),
    top: hp("250.95641756318307%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1542_120_1558: {
    flexGrow: 1,
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1542_120_1565: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1542_120_1566: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_121_1550: {
    width: wp("17.417873990593517%"),
    minWidth: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.74188968472248%"),
    top: hp("250.95628415300547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1550_120_1558: {
    flexGrow: 1,
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1550_120_1565: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1550_120_1566: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_121_1558: {
    width: wp("17.417873990593517%"),
    minWidth: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.89216524472889%"),
    top: hp("250.95641756318307%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1558_120_1558: {
    flexGrow: 1,
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1558_120_1565: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I121_1558_120_1566: {
    width: wp("17.417873990593517%"),
    height: hp("9.01639344262295%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(196, 196, 196, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_120_1619: {
    width: wp("41.079972581063664%"),
    top: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.24423614213409%"),
    justifyContent: "center"
  },
  Text_120_1619: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  View_120_1561: {
    width: wp("41.079976377858884%"),
    top: hp("127.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.51183457272119%"),
    justifyContent: "center"
  },
  Text_120_1561: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  View_121_1502: {
    width: wp("22.69947052171991%"),
    top: hp("98.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.713629910119986%"),
    justifyContent: "center"
  },
  Text_121_1502: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  View_121_1503: {
    width: wp("22.69947052171991%"),
    top: hp("98.36078914788251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.319322779305736%"),
    justifyContent: "center"
  },
  Text_121_1503: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  View_121_1504: {
    width: wp("22.69947052171991%"),
    top: hp("98.36078914788251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.92501564849148%"),
    justifyContent: "center"
  },
  Text_121_1504: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  View_120_1618: {
    width: wp("41.079972581063664%"),
    top: hp("150.6830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.708936995296758%"),
    justifyContent: "center"
  },
  Text_120_1618: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.135,
    textTransform: "uppercase"
  },
  View_121_1501: {
    width: wp("29.361559012714782%"),
    minWidth: wp("29.361559012714782%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.30993694965928%"),
    top: hp("242.89630827356555%"),
    justifyContent: "flex-start"
  },
  Text_121_1501: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_1550: {
    width: wp("12.93899210729804%"),
    height: hp("2.459016393442623%"),
    top: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.44613376519601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_122_1553: {
    width: wp("15.924913362828358%"),
    minWidth: wp("15.924913362828358%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.478984168958604%"),
    top: hp("13.524723574112022%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_122_1555: {
    width: wp("16.671393676710935%"),
    minWidth: wp("16.671393676710935%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.64803138825793%"),
    top: hp("13.388111552254097%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_122_1554: {
    width: wp("10.948377936944494%"),
    minWidth: wp("10.948377936944494%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.464905424488926%"),
    top: hp("14.071171661543715%"),
    justifyContent: "center"
  },
  Text_122_1554: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_1556: {
    width: wp("13.187818878592234%"),
    minWidth: wp("13.187818878592234%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.88747232990566%"),
    top: hp("13.934426229508196%"),
    justifyContent: "center"
  },
  Text_122_1556: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_125_1682: {
    width: wp("35.58222829506961%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7370944842361236%"),
    top: hp("9.15313887465847%")
  },
  View_138_2266: {
    width: wp("2.4497674975497383%"),
    minWidth: wp("2.4497674975497383%"),
    height: hp("52.4612551829854%"),
    minHeight: hp("52.4612551829854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.58299851294719%"),
    top: hp("91.80221140710383%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_2266_82_1018: {
    flexGrow: 1,
    width: wp("2.4497674975497383%"),
    height: hp("52.4612551829854%"),
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
  View_117_1470: {
    width: wp("93.44193990113601%"),
    height: hp("6.6630483325061896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2488267712941931%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I117_1470_12_141: {
    flexGrow: 1,
    width: wp("16.96956359863592%"),
    height: hp("2.303954421496782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94803911093939%"),
    top: hp("2.073460980191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I117_1470_12_142: {
    width: wp("6.258202026865971%"),
    minWidth: wp("6.258202026865971%"),
    height: hp("1.682718334302225%"),
    minHeight: hp("1.682718334302225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.704897053314838%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I117_1470_12_143: {
    width: wp("5.50966907056959%"),
    height: hp("1.5864301900394628%"),
    top: hp("0.05069586748633892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0009719795753539984%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I117_1470_12_144: {
    width: wp("0.34442123542628633%"),
    height: hp("0.5487241380201663%"),
    top: hp("0.5476487790300548%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.735165484458534%")
  },
  View_I117_1470_12_145: {
    width: wp("4.501763744265795%"),
    height: hp("1.0330653581462923%"),
    top: hp("0.3273885758196724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5049433894036497%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I117_1470_12_146: {
    width: wp("5.272485171806123%"),
    height: hp("2.0855601368054666%"),
    top: hp("0.1835724043715845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.979451364609972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I117_1470_12_147: {
    width: wp("3.8499017028702482%"),
    height: hp("1.5292946758166037%"),
    top: hp("0.18730788934426235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.667749968277775%")
  },
  View_I117_1470_12_151: {
    width: wp("4.516556058428426%"),
    minWidth: wp("4.516556058428426%"),
    height: hp("1.6705364477439004%"),
    minHeight: hp("1.6705364477439004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.006317867239900465%"),
    top: hp("0.36020747950819665%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I117_1470_12_152: {
    width: wp("4.263522912633996%"),
    height: hp("1.4866615253719475%"),
    top: hp("0.09165279200819665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16815246653864335%")
  },
  View_I117_1470_12_157: {
    flexGrow: 1,
    width: wp("14.006073809243388%"),
    height: hp("3.2392775426145457%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.250147676349937%"),
    top: hp("1.6114615351775958%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I117_1470_12_158: {
    flexGrow: 1,
    width: wp("13.492611360573212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10205785541363444%"),
    top: hp("0.8224737448770489%"),
    justifyContent: "flex-start"
  },
  Text_I117_1470_12_158: {
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
