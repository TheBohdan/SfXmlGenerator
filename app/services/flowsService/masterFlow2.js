module.exports = (i) => {
  return { filename: `Master_Flow_2${i}.flow`, xml: `<?xml version="1.0" encoding="UTF-8"?>
<Flow xmlns="http://soap.sforce.com/2006/04/metadata">
    <decisions>
        <description>Too much for me</description>
        <name>A_hard_decision</name>
        <label>A hard decision</label>
        <locationX>670</locationX>
        <locationY>206</locationY>
        <defaultConnector>
            <targetReference>Okay_idea</targetReference>
        </defaultConnector>
        <defaultConnectorLabel>Default Outcome</defaultConnectorLabel>
        <rules>
            <name>Lets_try_this_one</name>
            <conditionLogic>and</conditionLogic>
            <conditions>
                <leftValueReference>$System.OriginDateTime</leftValueReference>
                <operator>GreaterThan</operator>
                <rightValue>
                    <dateTimeValue>2020-04-22T23:00:00.000Z</dateTimeValue>
                </rightValue>
            </conditions>
            <connector>
                <targetReference>Nice_idea</targetReference>
            </connector>
            <label>Lets try this one</label>
        </rules>
    </decisions>
    <interviewLabel>Master Flow 2${i} {!$Flow.CurrentDateTime}</interviewLabel>
    <label>Master Flow 2${i}</label>
    <processMetadataValues>
        <name>BuilderType</name>
        <value>
            <stringValue>LightningFlowBuilder</stringValue>
        </value>
    </processMetadataValues>
    <processMetadataValues>
        <name>CanvasMode</name>
        <value>
            <stringValue>FREE_FORM_CANVAS</stringValue>
        </value>
    </processMetadataValues>
    <processMetadataValues>
        <name>OriginBuilderType</name>
        <value>
            <stringValue>LightningFlowBuilder</stringValue>
        </value>
    </processMetadataValues>
    <processType>Flow</processType>
    <start>
        <locationX>544</locationX>
        <locationY>48</locationY>
        <connector>
            <targetReference>A_hard_decision</targetReference>
        </connector>
    </start>
    <status>Active</status>
    <subflows>
        <name>Nice_idea</name>
        <label>Nice idea</label>
        <locationX>538</locationX>
        <locationY>326</locationY>
        <flowName>Test_Subflow_1${i}</flowName>
    </subflows>
    <subflows>
        <name>Okay_idea</name>
        <label>Okay idea</label>
        <locationX>769</locationX>
        <locationY>333</locationY>
        <flowName>Test_Subflow_3${i}</flowName>
    </subflows>
</Flow>
`}
}