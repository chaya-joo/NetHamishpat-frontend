export type DecisionType = {
    DecisionId: number,
    DecisionNumber: number,
    DecisionName: string,
    DecisionSignatureDate: string,
    DecisionSignatureUserID: string,
    DecisionSignatureUserName: string,
    DecisionDesc: string,
    IsDecisionInProtocol: boolean,
    DecisionTypeID: number,
    IsCanceledDecision: boolean,
    DecisionLinkID: number,
    DecisionLinkTypeID: number,
    IsInstruction: boolean,
    DecisionAttributeID: number,
    IsDecisionConverted: boolean,
    PrivillageID: number,
    DocumentID: string
 }

 export type SittingType={
    SittingDate: string,
    SittingTime: string,
    SittingTypeID: number,
    JudgeName: string,
    SittingActivityStatusID: number
 }