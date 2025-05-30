#pragma once
#ifndef GOLDILOCKS_POSEIDON2_H
  #define GOLDILOCKS_POSEIDON2_H

  #include <string>

namespace poseidon2_constants_goldilocks {

  /**
   * This inner namespace contains constants for running Poseidon2.
   * The number in the name corresponds to the arity of hash function
   */

  int full_rounds_2 = 8;
  int half_full_rounds_2 = 4;
  int partial_rounds_2 = 27;
  int alpha_2 = 7;

  static const std::string rounds_constants_2[] = {
    "0x5abce9a3dc4d1d10", "0xf9cd91d24cdedf4c", "0x89604b69d78c1a55", "0xc367fca010c84bc2", "0xdc601d6314731702",
    "0x224b8927271a4d93", "0x5c6c62f8b1ebe9ba", "0x9f8c2e204a96c44a", "0x346fc9299d82498d", "0x8d33d7744b14fccb",
    "0x1b14c6f6e72e37d7", "0xbac571c17b13e52a", "0xa7a37081225894b2", "0xc149ae853c717cc9", "0xbf67fd428040c7f5",
    "0x6f0fa5450d9eb3cd", "0xc430ba936db397d3", "0xe813e2eab1a5324a", "0xad88fa23e8eb567d", "0x6788dd5ccddb7098",
    "0xb9a7629619a84b01", "0xff4a0ef5648f99ba", "0xc5c52510b28d4619", "0xebaa24050eff9fb6", "0xe60fdf6781acc3f3",
    "0xf892daeb508e1f16", "0x253da1ae36aeee56", "0x6a9bee9047a49dd0", "0x359856d9e9fce97e", "0xc4f588afe1a9e855",
    "0x7b3116dcbe62d7e3", "0xeb332ecc5f6e1415", "0xf4b1aa75e26b0848", "0x39b3145ba4387a8f", "0x794d00299e3a2358",
    "0xdfbb74408c49b8a6", "0xe52ab41ca36fda58", "0xf2a5cab2a8c77d00", "0xdb659c26729411b6", "0x78f52437452d8230",
    "0x86f197ce3aceb0f0", "0xeea0ea62fa89679e", "0x95ed40239fd138bc"};

  static const std::string mds_matrix_2[] = {"0x2", "0x1", "0x1", "0x2"};

  static const std::string partial_matrix_diagonal_2[] = {"0x2", "0x3"};

  int full_rounds_3 = 8;
  int half_full_rounds_3 = 4;
  int partial_rounds_3 = 23;
  int alpha_3 = 7;

  static const std::string rounds_constants_3[] = {
    "0xe0fb17eae61df432", "0x7e9a39727cb2769e", "0x5e8739b67aa37fce", "0xc1ac376d3c55a231", "0x69ac78b4875c4a35",
    "0x64dcb33dca7c5243", "0xe3c6a02bf4a3799a", "0x1c17afe9e0b6e1f5", "0xc9e09446d1a6da8a", "0xb1407fc1fd612953",
    "0xe8b80e04e1a993df", "0xd669afe56d90e221", "0xd13947098effa34b", "0xf350d72a05d32565", "0x52b023e337b25d2f",
    "0x1e6b0efaaee78f72", "0xa84d513ab0ad403b", "0xdf5f66d9fec33978", "0x96ad16c7091ca012", "0x96eaa541f2c1b494",
    "0x65c0101667d81153", "0xd60c924ef9f6c004", "0x3c521d48c853e31e", "0x16d1e457811487b7", "0xb91c9727b5082287",
    "0xcb90386e1ffe67ec", "0xc9eaa68cb1eb21ed", "0x228c255e648cc605", "0x19353cd374a2dda4", "0x1806c90aadcf1ff7",
    "0xff519c985776740d", "0xbb0051df4254b157", "0x91a00c8bd2a8c51e", "0x2d4b13734b24cbea", "0x860d8d6e37d2c46b",
    "0xdd8d55a739a9afac", "0x1106f1f2f95f992c", "0x8f53037e6c8ea8bc", "0xc65d624166739469", "0x371b93fbb4feeb2b",
    "0xfab4185288338b0b", "0x6d5b76f63040de3b", "0x5338263e3c5e21",   "0xfd333abd5bc9f948", "0xfccd44e57b0c5a2",
    "0xfa620a0d09056f90", "0x482c5fde9ea61488"};

  static const std::string mds_matrix_3[] = {"0x2", "0x1", "0x1", "0x1", "0x2", "0x1", "0x1", "0x1", "0x2"};

  static const std::string partial_matrix_diagonal_3[] = {"0x2", "0x2", "0x3"};

  int full_rounds_4 = 8;
  int half_full_rounds_4 = 4;
  int partial_rounds_4 = 21;
  int alpha_4 = 7;

  static const std::string rounds_constants_4[] = {
    "0x5098165ee28e503e", "0x41b84edfee6c0590", "0xdda6bc081661f7b8", "0xb56f892b5fc6d76c", "0xb2b7e92b1f70399f",
    "0x7075cc44042536e9", "0xd5aae31b4968adb1", "0x713f06eb5e40337",  "0x80dccd8a419cc2d5", "0x89ae3f75c9b53e2c",
    "0x8aac5449eff27e1d", "0xef29b2b24bf503f9", "0xa1d4f9eaaa62e9fc", "0x2f215d5c5a0aa622", "0x7b3447f34ae22dd9",
    "0x4b614218a8e81eef", "0xe063343114e0f434", "0x2cdedf7f0717ad4e", "0x4662c297f2537cf5", "0x8fe48eee51761f3d",
    "0x616aead4ae0ebf00", "0x9b40b73022b3089b", "0xa051e1646094b036", "0xf69b2c13f377ff8e", "0x96f7dec4549af9be",
    "0x858371686234c707", "0x8483ec4d5e3e8114", "0x21aea04a4066e649", "0xbed21bd95c72ec7e", "0x948655aafad4b757",
    "0xd4b2ed65735823e2", "0x1930ef5f54c40462", "0xb3cc1696b1d3811e", "0xafe0336077202599", "0x11da6a906ef66e3e",
    "0xd7abdf7d347fb43f", "0x65e7d3c9f0e8da86", "0xb73bdafed7f79f4",  "0x619b24eb14c29f0f", "0x85904bd8db9e3cd9",
    "0x4c9c28e673abb589", "0x73b20f643717949f", "0x832ab3faa2c0639a", "0xfa1d702bafb65207", "0x3f5f17b0409003c",
    "0x2c3ff110b39f84d5", "0x4cdfd3ff34ce6f4f", "0xd3acf5807f208db4", "0x13d28634ce48e600", "0xb065f0e667d7caf9",
    "0x44f6f3d6b12825ca", "0x243a64c03f36ea35", "0x470a3b7c2f6a6a7a"};

  static const std::string mds_matrix_4[] = {"0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1",
                                             "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6"};

  static const std::string partial_matrix_diagonal_4[] = {
    "0xf0ce126fe8a83095", "0x60f87e0b59fb4ee7", "0xa8106c221cd6d883", "0x5529eddc46e372e8"};

  int full_rounds_8 = 8;
  int half_full_rounds_8 = 4;
  int partial_rounds_8 = 22;
  int alpha_8 = 7;

  static const std::string rounds_constants_8[] = {
    "0xdd5743e7f2a5a5d9", "0xcb3a864e58ada44b", "0xffa2449ed32f8cdc", "0x42025f65d6bd13ee", "0x7889175e25506323",
    "0x34b98bb03d24b737", "0xbdcc535ecc4faa2a", "0x5b20ad869fc0d033", "0xf1dda5b9259dfcb4", "0x27515210be112d59",
    "0x4227d1718c766c3f", "0x26d333161a5bd794", "0x49b938957bf4b026", "0x4a56b5938b213669", "0x1120426b48c8353d",
    "0x6b323c3f10a56cad", "0xce57d6245ddca6b2", "0xb1fc8d402bba1eb1", "0xb5c5096ca959bd04", "0x6db55cd306d31f7f",
    "0xc49d293a81cb9641", "0x1ce55a4fe979719f", "0xa92e60a9d178a4d1", "0x2cc64973bcfd8c",   "0xcea721cce82fb11b",
    "0xe5b55eb8098ece81", "0x4e30525c6f1ddd66", "0x43c6702827070987", "0xaca68430a7b5762a", "0x3674238634df9c93",
    "0x88cee1c825e33433", "0xde99ae8d74b57176", "0x488897d85ff51f56", "0x1140737ccb162218", "0xa7eeb9215866ed35",
    "0x9bd2976fee49fcc9", "0xc0c8f0de580a3fcc", "0x4fb2dae6ee8fc793", "0x343a89f35f37395b", "0x223b525a77ca72c8",
    "0x56ccb62574aaa918", "0xc4d507d8027af9ed", "0xa080673cf0b7e95c", "0xf0184884eb70dcf8", "0x44f10b0cb3d5c69",
    "0xe9e3f7993938f186", "0x1b761c80e772f459", "0x606cec607a1b5fac", "0x14a0c2e1d45f03cd", "0x4eace8855398574f",
    "0xf905ca7103eff3e6", "0xf8c8f8d20862c059", "0xb524fe8bdd678e5a", "0xfbb7865901a1ec41", "0x14ef1197d341346",
    "0x9725e20825d07394", "0xfdb25aef2c5bae3b", "0xbe5402dc598c971e", "0x93a5711f04cdca3d", "0xc45a9a5b2f8fb97b",
    "0xfe8946a924933545", "0x2af997a27369091c", "0xaa62c88e0b294011", "0x58eb9d810ce9f74",  "0xb3cb23eced349ae4",
    "0xa3648177a77b4a84", "0x43153d905992d95d", "0xf4e2a97cda44aa4b", "0x5baa2702b908682f", "0x82923bdf4f750d1",
    "0x98ae09a325893803", "0xf8a6475077968838", "0xceb0735bf00b2c5f", "0xa1a5d953888e072",  "0x2fcb190489f94475",
    "0xb5be06270dec69fc", "0x739cb934b09acf8b", "0x537750b75ec7f25b", "0xe9dd318bae1f3961", "0xf7462137299efe1a",
    "0xb1f6b8eee9adb940", "0xbdebcc8a809dfe6b", "0x40fc1f791b178113", "0x3ac1c3362d014864", "0x9a016184bdb8aeba",
    "0x95f2394459fbc25e"};

  static const std::string mds_matrix_8[] = {
    "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
    "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
    "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"};

  static const std::string partial_matrix_diagonal_8[] = {
    "0xa98811a1fed4e3a6", "0x1cc48b54f377e2a1", "0xe40cd4f6c5609a27", "0x11de79ebca97a4a4",
    "0x9177c73d8b7e929d", "0x2a6fe8085797e792", "0x3de6e93329f8d5ae", "0x3f7af9125da962ff"};

  int full_rounds_12 = 8;
  int half_full_rounds_12 = 4;
  int partial_rounds_12 = 22;
  int alpha_12 = 7;

  static const std::string rounds_constants_12[] = {
    "0x13dcf33aba214f46", "0x30b3b654a1da6d83", "0x1fc634ada6159b56", "0x937459964dc03466", "0xedd2ef2ca7949924",
    "0xede9affde0e22f68", "0x8515b9d6bac9282d", "0x6b5c07b4e9e900d8", "0x1ec66368838c8a08", "0x9042367d80d1fbab",
    "0x400283564a3c3799", "0x4a00be0466bca75e", "0x7913beee58e3817f", "0xf545e88532237d90", "0x22f8cb8736042005",
    "0x6f04990e247a2623", "0xfe22e87ba37c38cd", "0xd20e32c85ffe2815", "0x117227674048fe73", "0x4e9fb7ea98a6b145",
    "0xe0866c232b8af08b", "0xbbc77916884964",   "0x7031c0fb990d7116", "0x240a9e87cf35108f", "0x2e6363a5a12244b3",
    "0x5e1c3787d1b5011c", "0x4132660e2a196e8b", "0x3a013b648d3d4327", "0xf79839f49888ea43", "0xfe85658ebafe1439",
    "0xb6889825a14240bd", "0x578453605541382b", "0x4508cda8f6b63ce9", "0x9c3ef35848684c91", "0x812bde23c87178c",
    "0xfe49638f7f722c14", "0x8e3f688ce885cbf5", "0xb8e110acf746a87d", "0xb4b2e8973a6dabef", "0x9e714c5da3d462ec",
    "0x6438f9033d3d0c15", "0x24312f7cf1a27199", "0x23f843bb47acbf71", "0x9183f11a34be9f01", "0x839062fbb9d45dbf",
    "0x24b56e7e6c2e43fa", "0xe1683da61c962a72", "0xa95c63971a19bfa7", "0x4adf842aa75d4316", "0xf8fbb871aa4ab4eb",
    "0x68e85b6eb2dd6aeb", "0x7a0b06b2d270380",  "0xd94e0228bd282de4", "0x8bdd91d3250c5278", "0x209c68b88bba778f",
    "0xb5e18cdab77f3877", "0xb296a3e808da93fa", "0x8370ecbda11a327e", "0x3f9075283775dad8", "0xb78095bb23c6aa84",
    "0x3f36b9fe72ad4e5f", "0x69bc96780b10b553", "0x3f1d341f2eb7b881", "0x4e939e9815838818", "0xda366b3ae2a31604",
    "0xbc89db1e7287d509", "0x6102f411f9ef5659", "0x58725c5e7ac1f0ab", "0xdf5856c798883e7",  "0xf7bb62a8da4c961b",
    "0xc68be7c94882a24d", "0xaf996d5d5cdaedd9", "0x9717f025e7daf6a5", "0x6436679e6e7216f4", "0x8a223d99047af267",
    "0xbb512e35a133ba9a", "0xfbbf44097671aa03", "0xf04058ebf6811e61", "0x5cca84703fac7ffb", "0x9b55c7945de6469f",
    "0x8e05bf09808e934f", "0x2ea900de876307d7", "0x7748fff2b38dfb89", "0x6b99a676dd3b5d81", "0xac4bb7c627cf7c13",
    "0xadb6ebe5e9e2f5ba", "0x2d33378cafa24ae3", "0x1e5b73807543f8c2", "0x9208814bfebb10f",  "0x782e64b6bb5b93dd",
    "0xadd5a48eac90b50f", "0xadd4c54c736ea4b1", "0xd58dbb86ed817fd8", "0x6d5ed1a533f34ddd", "0x28686aa3e36b7cb9",
    "0x591abd3476689f36", "0x47d766678f13875",  "0xa2a11112625f5b49", "0x21fd10a3f8304958", "0xf9b40711443b0280",
    "0xd2697eb8b2bde88e", "0x3493790b51731b3f", "0x11caf9dd73764023", "0x7acfb8f72878164e", "0x744ec4db23cefc26",
    "0x1e00e58f422c6340", "0x21dd28d906a62dda", "0xf32a46ab5f465b5f", "0xbfce13201f3f7e6b", "0xf30d2e7adb5304e2",
    "0xecdf4ee4abad48e9", "0xf94e82182d395019", "0x4ee52e3744d887c5", "0xa1341c7cac0083b2", "0x2302fb26c30c834a",
    "0xaea3c587273bf7d3", "0xf798e24961823ec7", "0x962deba3e9a2cd94"};

  static const std::string mds_matrix_12[] = {
    "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x8", "0xc", "0x2", "0x2",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1",
    "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x2", "0x6", "0xa", "0xe", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"};

  static const std::string partial_matrix_diagonal_12[] = {
    "0xc3b6c08e23ba9301", "0xd84b5de94a324fb7", "0xd0c371c5b35b850",  "0x7964f570e7188038",
    "0x5daf18bbd996604c", "0x6743bc47b9595258", "0x5528b9362c59bb71", "0xac45e25b7127b68c",
    "0xa2077d7dfbb606b6", "0xf3faac6faee378af", "0xc6388b51545e884",  "0xd27dbb6944917b61"};

  int full_rounds_16 = 8;
  int half_full_rounds_16 = 4;
  int partial_rounds_16 = 22;
  int alpha_16 = 7;

  static const std::string rounds_constants_16[] = {
    "0x15ebea3fc73397c3", "0xd73cd9fbfe8e275c", "0x8c096bfce77f6c26", "0x4e128f68b53d8fea", "0x29b779a36b2763f6",
    "0xfe2adc6fb65acd08", "0x8d2520e725ad0955", "0x1c2392b214624d2a", "0x37482118206dcc6e", "0x2f829bed19be019a",
    "0x2fe298cb6f8159b0", "0x2bbad982deccdbbf", "0xbad568b8cc60a81e", "0xb86a814265baad10", "0xbec2005513b3acb3",
    "0x6bf89b59a07c2a94", "0xa25deeb835e230f5", "0x3c5bad8512b8b12a", "0x7230f73c3cb7a4f2", "0xa70c87f095c74d0f",
    "0x6b7606b830bb2e80", "0x6cd467cfc4f24274", "0xfeed794df42a9b0a", "0x8cf7cf6163b7dbd3", "0x9a6e9dda597175a0",
    "0xaa52295a684faf7b", "0x17b811cc3589d8d",  "0x55bfb699b6181648", "0xc2ccaf71501c2421", "0x1707950327596402",
    "0xdd2fcdcd42a8229f", "0x8b9d7d5b27778a21", "0xac9a05525f9cf512", "0x2ba125c58627b5e8", "0xc74e91250a8147a5",
    "0xa3e64b640d5bb384", "0xf53047d18d1f9292", "0xbaaeddacae3a6374", "0xf2d0914a808b3db1", "0x18af1a3742bfa3b0",
    "0x9a621ef50c55bdb8", "0xc615f4d1cc5466f3", "0xb7fbac19a35cf793", "0xd2b1a15ba517e46d", "0x4a290c4d7fd26f6f",
    "0x4f0cf1bb1770c4c4", "0x548345386cd377f5", "0x33978d2789fddd42", "0xab78c59deb77e211", "0xc485b2a933d2be7f",
    "0xbde3792c00c03c53", "0xab4cefe8f893d247", "0xc5c0e752eab7f85f", "0xdbf5a76f893bafea", "0xa91f6003e3d984de",
    "0x99539077f311e87",  "0x97ec52232f9559e",  "0x53641bdf8991e48c", "0x2afe9711d5ed9d7c", "0xa7b13d3661b5d117",
    "0x5a0e243fe7af6556", "0x1076fae8932d5f00", "0x9b53a83d434934e3", "0xed3fd595a3c0344a", "0x28eff4b01103d100",
    "0x60400ca3e2685a45", "0x1c8636beb3389b84", "0xac1332b60e13eff0", "0x2adafcc364e20f87", "0x79ffc2b14054ea0b",
    "0x3f98e4c0908f0a05", "0xcdb230bc4e8a06c4", "0x1bcaf7705b152a74", "0xd9bca249a82a7470", "0x91e24af19bf82551",
    "0xa62b43ba5cb78858", "0xb4898117472e797f", "0xb3228bca606cdaa0", "0x844461051bca39c9", "0xf3411581f6617d68",
    "0xf7fd50646782b533", "0x6ca664253c18fb48", "0x2d2fcdec0886a08f", "0x29da00dd799b575e", "0x47d966cc3b6e1e93",
    "0xde884e9a17ced59e", "0xdacf46dc1c31a045", "0x5d2e3c121eb387f2", "0x51f8b0658b124499", "0x1e7dbd1daa72167d",
    "0x8275015a25c55b88", "0xe8521c24ac7a70b3", "0x6521d121c40b3f67", "0xac12de797de135b0", "0xafa28ead79f6ed6a",
    "0x685174a7a8d26f0b", "0xeff92a08d35d9874", "0x3058734b76dd123a", "0xfa55dcfba429f79c", "0x559294d4324c7728",
    "0x7a770f53012dc178", "0xedd8f7c408f3883b", "0x39b533cf8d795fa5", "0x160ef9de243a8c0a", "0x431d52da6215fe3f",
    "0x54c51a2a2ef6d528", "0x9b13892b46ff9d16", "0x263c46fcee210289", "0xb738c96d25aabdc4", "0x5c33a5203996d38f",
    "0x2626496e7c98d8dd", "0xc669e0a52785903a", "0xaecde726c8ae1f47", "0x39343ef3a81e999",  "0x2615ceaf044a54f9",
    "0x7e41e834662b66e1", "0x4ca5fd4895335783", "0x64b334d02916f2b0", "0x87268837389a6981", "0x34b75bcb20a6274",
    "0x58e658296cc2cd6e", "0xe2d0f759acc31df4", "0x81a652e435093e20", "0xb72b6e0172eaf47",  "0x4aec43cec577d66d",
    "0xde78365b028a84e6", "0x444e19569adc0ee4", "0x942b2451fa40d1da", "0xe24506623ea5bd6c", "0x82854bf2ef7c743",
    "0x69dbbc566f59d62e", "0x248c38d02a7b5cb2", "0x4f4e8f8c09d15edb", "0xd96682f188d310cf", "0x6f9a25d56818b54c",
    "0xb6cefed606546cd9", "0x5bc07523da38a67b", "0x7df5a3c35b8111cf", "0xaaa2cc5d4db34bb0", "0x9e673ff22a4653f8",
    "0xbd8b278d60739c62", "0xe10d20f6925b8815", "0xf6c87b91dd4da2bf", "0xfed623e2f71b6f1a", "0xa0f02fa52a94d0d3",
    "0xbb5794711b39fa16", "0xd3b94fba9d005c7f", "0x15a26e89fad946c9", "0xf3cb87db8a67cf49", "0x400d2bf56aa2a577"};

  static const std::string mds_matrix_16[] = {
    "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"};

  static const std::string partial_matrix_diagonal_16[] = {
    "0xde9b91a467d6afc1", "0xc5f16b9c76a9be18", "0xab0fef2d540ac56",  "0x3001d27009d05774",
    "0xed23b1f906d3d9ec", "0x5ce73743cba97055", "0x1c3bab944af4ba25", "0x2faa105854dbafaf",
    "0x53ffb3ae6d421a11", "0xbcda9df8884ba397", "0xfc1273e4a31807bc", "0xc77952573d5142c1",
    "0x56683339a819b85f", "0x328fcbd8f0ddc8ec", "0xb5101e303fce9cb8", "0x774487b8c40089bc"};

  int full_rounds_20 = 8;
  int half_full_rounds_20 = 4;
  int partial_rounds_20 = 22;
  int alpha_20 = 7;

  static const std::string rounds_constants_20[] = {
    "0xf50674557d527f42", "0x8b33e51b9306c9fb", "0x4cfcb30bb344eb3",  "0x5ea8bec44640c87d", "0xd84af685a9708e36",
    "0x5b33851fa07aeba4", "0xeb7cbc374f3b5ca1", "0xecaaea4a76acdd63", "0x2b1fa14802fdf5ba", "0xabd29defd98c932a",
    "0x280febc703c6f6bc", "0x8421653ddb551263", "0xd75332a308377a9a", "0xe45ce859b4936b93", "0xe78d6432dae2a36a",
    "0x577b3e8e105daa7c", "0x81b584e5beba6b37", "0xf68acc5174b4131",  "0x9778789f2bdcf224", "0x2168764b99769f7b",
    "0x5a413448ea188080", "0x477f5ced7153ebcb", "0x5fd53ff5d03a419a", "0x1a2c5db9b1d8920f", "0xf72f9208355e32b9",
    "0x48b703a56669bb32", "0x7cc279c1c07bc372", "0xd27e3611c012ce04", "0xf16771e825f6e903", "0x78e2f60a6f3be068",
    "0x58e163e91557e816", "0x5b73573f7a257c27", "0x61099de80b8dec",   "0x455a75647c9d9667", "0x7098d056e4cf6d14",
    "0x31678c815e7b8e0b", "0xe492d70c4a3b9961", "0x3229a663cdb553c1", "0x991dbb8e6bb94f68", "0xae0c1a23ab319d98",
    "0x68caee423f6c1ca8", "0x88d5d56d052133ad", "0x944cb4e601ab885b", "0xad0ad397c02cb6b6", "0x48eb1c25917f47ab",
    "0xb586ca072e551a5",  "0x7620eec7fdf7caf2", "0xdc01964b2c304322", "0xdfce38c4e7eeb165", "0xc295f9569e1bb057",
    "0xfaa09073be956353", "0x2bcd086ac04a51a8", "0xcebaf7d11c46f141", "0x2d8c6f303321f3db", "0xc6866bec13a24a73",
    "0xf94822529997b647", "0x2e7c7fb5dadf4875", "0x7f217e80452ad2fd", "0x960769bf3f80475b", "0x6e474087b9c8ef41",
    "0x7a3c61782d3cdb1e", "0x34f6202a97d34913", "0x384eb863f122f34f", "0xdd0a16eeef9f245",  "0xc7b7a83c63c05ca0",
    "0x5a9c01c5b1711fb3", "0x622bd3594411269e", "0x1411eedfa8800f63", "0x63264ba3307daa57", "0x650fcf71ce431a7c",
    "0xb391425703d4db0b", "0x2527ee4c34183aaa", "0xbb8d239eb87d1b85", "0x1fee0fb1866e793d", "0xda1a1b59ed24ecbd",
    "0xde4e502b21d3a750", "0xecfcc5d86a85661",  "0xc6743030d6cdfff0", "0x1fdd06ecbc98c107", "0xdf68661118e969b4",
    "0xb4c4646b481ab94b", "0x3a6dd8f34a4b672d", "0xe4a13a0271f8c398", "0xb8c4d81a0f3f87c6", "0x3bb4717250f0add9",
    "0x27ad39cf9b261444", "0x153a3fc8b666d830", "0x958023df70e2f9ba", "0xe5a98af0507e5112", "0xff4c17fffffd4ccb",
    "0x3f033e0e60932043", "0x79995f1fd8b0ed93", "0x5fccc385058f90de", "0x121495895f0337f2", "0xea4329ff4a44fc89",
    "0x9e582ef77f57587a", "0xdd355989ec73626b", "0xe1542c0dcd6602ad", "0x9ce00cbfa5c788b7", "0x5b5e142bd67da0e9",
    "0xddae0051d202fd78", "0xe8d5708621548b09", "0x546948156f481f23", "0xb969557898da1c1f", "0xeb2fb3be05e81624",
    "0x5fd250a0ded7ddfc", "0x7abd52aa764e2a35", "0xc8d101b1c0a4595e", "0x300cb802ad939c00", "0x16d4a6ac828e4842",
    "0xd763f9f3377a0d88", "0xb842c1778267fb5b", "0x7998fca5e0508c18", "0x8980b89d5d95b1e",  "0x5fc3c05cb8b2a5b7",
    "0xe8263579c08b15ed", "0x1c85bc5bdee01834", "0x496efa05ae9f7e59", "0x26cdfc330f0c6d44", "0x2da38a687f2efd4e",
    "0x242721a16c92bd03", "0xd150bae390c7f3de", "0xa17440c7563bda85", "0x1b52c08ccc72cffc", "0x853bbd066be2f8c",
    "0xb140631d97249d92", "0x31ed98f8f4e8bc2a", "0xb7b4c6534fa6ad28", "0xc31ae7f908b28f94", "0xf2e7d14d33db910d",
    "0x408cd1daa30e5d85", "0x67635e708b67e913", "0xf41e00c44bbcddd",  "0x306ec73b35427165", "0xb19cc1e7013a0c83",
    "0x598948784a1d8dfb", "0xcd0d07046113b3a4", "0x9f5777a149e7100f", "0x52e16bce7d6ce553", "0x4dfd369bb3a4e49f",
    "0x6721381077a7facf", "0x84fae431fad2a352", "0xb57b0b6da95609a3", "0x1f3487a56048fd5f", "0x6de8f1ff46eb8de7",
    "0x790ff3c21234db43", "0xfa75c59f4291147",  "0x41baef249921ddb6", "0x8f3049fb127bec11", "0x5d1239a25594fa4b",
    "0x11956aca10824ee",  "0x25665f341261989b", "0x7d12eaf643734d3c", "0xeace4b846cd0a06b", "0x6c7157cc1760a5ac",
    "0xb0e83ddf39a63764", "0xfab9e612681227fb", "0xcf7f0d62238655e",  "0xc32a0826ca5643bb", "0x4fbd2e4d1bd8f2b0",
    "0xc6c94a369f4ac8d5", "0x8cf524c8b7774cb2", "0x8a8a7159ca118c8c", "0x7020e0efee7c62ed", "0xb82c8f0d0abaacf6",
    "0xdb1b8170627bcabd", "0x89f751dac47b2e6e", "0xd5a68b7ad8b8ad75", "0x1c2c6f90a9cb8a9",  "0x749f9c0919bff4f3",
    "0x52713fb5d3f6e8d0", "0x6c246db24bfafbd9", "0x483e5244b3f8adf0", "0x670755cdb87a4c39", "0xa2bf8de7fd0b4d78",
    "0x3334c74fce39902b", "0x3885406d5ea81e21", "0x8dfbd465694a0354", "0xce8f5388e86080d9", "0x89108c704fc3ced7",
    "0xf4896b0b26d80f23", "0xb4fd29f241f11176"};

  static const std::string mds_matrix_20[] = {
    "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0x5", "0x7", "0x1", "0x3", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x2", "0x8", "0xc",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6",
    "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
    "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6",
    "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0xa", "0xe", "0x2", "0x6", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x1", "0x4", "0x6",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"};

  static const std::string partial_matrix_diagonal_20[] = {
    "0x95c381fda3b1fa58", "0xf36fe9eb1288f42d", "0x89f5dcdfef277945", "0x106f22eadeb3e2d3", "0x684e31a2530e5112",
    "0x27435c5d89fd148f", "0x3ebed31c414dbf18", "0xfd45b0b2d294e3cd", "0x48c904473a7f6dc0", "0xe0d1b67809295b4e",
    "0xddd1941e9d199dcc", "0x8cfe534eeb74221a", "0xa6e5261d9e3b8525", "0x6897ee5ed0f82c1c", "0xe7dcd0739ee5f79",
    "0x493253f3d0d32364", "0xbb2737f5845f05c1", "0xa187e810b06ad904", "0xb635b995936c4919", "0xb3694a940bd2395"};

  int full_rounds_24 = 8;
  int half_full_rounds_24 = 4;
  int partial_rounds_24 = 22;
  int alpha_24 = 7;

  static const std::string rounds_constants_24[] = {
    "0xb872395376c3f222", "0x7d7c6c8d6dda795a", "0xc1a1e1450d7d048e", "0x37eb0d1b1db5377a", "0xc4bcae9b18a59675",
    "0x71b53bb0a698e945", "0x2bf969e10958afce", "0x7d547ff97be746ed", "0x39f63f1e29db315",  "0x3c1ff85fc2faa32b",
    "0x90726208dcb17d1c", "0x9c90cd53e23b6011", "0xc58c9dad698777e0", "0x141ec36e6fea61b2", "0x7c39986c2451f69",
    "0xf993966c72c1a7eb", "0xe3938b0f5ee41384", "0x83ca82679ec4b5f6", "0xcb64cc3dca7fa41e", "0x8840e8205e53d58f",
    "0x1f3f078825625b52", "0xa72bf89dfd2c2f87", "0xc9e870ff497c838a", "0x426a6f37e7ae0634", "0x4314cfdcd95b0740",
    "0x92a7f6d3314f8a50", "0x156758fbdcf9c1ee", "0x8378d076901e56be", "0xe1d97b6e463812a7", "0x8d46d2652bca6b40",
    "0x1ea01b3bf7e5cfe3", "0x906170850a1cffff", "0x9643d41e81398b4f", "0x301a20019c460b34", "0x6ce25ea766317b4e",
    "0x1c261cd0a6080260", "0xe11c4fdff98687eb", "0xf3b4ed6258851726", "0x2a77f334bf614629", "0x567d7604f6f3c921",
    "0x2e1bf953f8665f03", "0x93c80c0e670b8953", "0x58b039468b4f6ee3", "0xe36a89b1ffc54d63", "0xb30fc735a5d99435",
    "0x1d919c819c473bdf", "0x6daa31ea18a7bc11", "0x16471ed8a5579f77", "0xcdd3af8ddada773",  "0xd078e5fb0ecf9625",
    "0x4b975e2da42d49f9", "0x742cf192dbd445d5", "0x57e9f5d56874544f", "0x6a8da54d5288a300", "0x225dbda097bd252a",
    "0xbe9eb51ec094d9a1", "0x1ddb4046d4c7c116", "0xcbc7e7b40bbea879", "0x93166b2f6414b901", "0xcb11dfec6fbb8e52",
    "0x2ecbf1f80014e579", "0x15060341ca9d22f5", "0x1fa9b7a194723117", "0x3c2c3f71dc560bf4", "0x5f97a5f4043339a3",
    "0x4392b244d1d5c960", "0xa801965518f6c110", "0x54d6ec710d1d8d2",  "0xd65f11ec2f9c9265", "0xf47bbb086b1a190",
    "0xda31dfbafc6a76cd", "0xe7ff26ac0f400d2c", "0x89f43015ee3f11d5", "0x8362e3a83b5c87a7", "0xe43d40b6fe4806ed",
    "0x3de4666954796d0a", "0x81efba88a5a5bd0c", "0x14962857ad16b327", "0xbdd58805de1bbe5b", "0x182747b173500cb3",
    "0xdac897a37c8d3673", "0xcf3423a4f52d256e", "0x61af815c01ad11f1", "0x5572af14b3a045dd", "0xe604d80d81deec38",
    "0x31a31f537d56d21",  "0x2a1ac61a3d836c1e", "0xe2e5d6750882a1fa", "0x9456bd7eada108b2", "0xc3fd14f704898765",
    "0x6aad6c94f578da05", "0x6e622f104488d85c", "0xc8945dbd1b0b3c67", "0x4e555653569e8fe2", "0x6e6fb4afb9147379",
    "0xa099b0ca9f55bfec", "0x859bff4cfb815f66", "0x6725eecc958f9066", "0xb8b999428093aae5", "0xf507d3a28abd9528",
    "0xc1cbd266d76a07b9", "0x8f870dee1a225f50", "0xf9ec5d885f91c224", "0xa31fc4e1f06777f5", "0xc2a722c32ddf0699",
    "0xa581b9da188309b4", "0x998aad025ad11ba3", "0x443de5cad68a0c83", "0x5dd46af323630c9f", "0x92cc7b2191aa18b7",
    "0xf27884b16af142d6", "0xeda382312a75bcd2", "0x6d1c398af14aac0a", "0xf56d4baef333ebae", "0x110cf87d458dc79",
    "0xc2a6d1e83ab3b7a5", "0xb246c0bde623c7c5", "0xf4d8e7384bc7ce9f", "0xffc81193376c8d6f", "0x65068cb1af18b3b2",
    "0x2ad75ff59419ff2a", "0x8d8e0ffa5dc273a4", "0x6cf77dae86ee2d35", "0x89c7df66cd9807c4", "0xf6454818244090d0",
    "0xef6104b209b0b1d3", "0x8e9cf4285d7071d8", "0x9318266cbec0c0a9", "0xcba6b13786123742", "0x9ecd446df78805f6",
    "0x9990981422f24ba7", "0x27ea278397f82898", "0x9c7939759cee3520", "0x43265790682ebeaa", "0xf09fe17c2b20e5a7",
    "0xd0c44de757df8ca8", "0x78467f5491ba8979", "0xf26c4954e8816f8e", "0x61904592de1f069",  "0xc5ef15a2b2b4b596",
    "0x8d340e0d7f29d3e9", "0xb8574407bdefb1c8", "0x5bead7b674257ef5", "0xfd13d3db5fdd2dc8", "0x7e882a45092af135",
    "0x202b3667250e7767", "0x1813b1a84a915eb8", "0x8d6e2342a5d2bfa3", "0xea586b679c23ade6", "0x79b8573bb3eadb91",
    "0xccec2454db884ccf", "0xf78ce820fed76822", "0x44a5aeb6eb5749e4", "0xb21c684f44119678", "0x36e69d844defa80a",
    "0xc57d8acf6e0f7ba9", "0xa2d10cd73b240141", "0x84672d34689ded5c", "0x18313f2619cc4708", "0xca8ed13987b100c9",
    "0x5e2a3d35773bb9d0", "0x997580bbddec1762", "0xd77717409a19fd54", "0x86d8b7f2a0ea4a1f", "0x2b47aa3dffb33a7d",
    "0xe33d89e53511c6f2", "0xebffcaeef0a009dc", "0x9dd655f164ba3f57", "0xca429d053c15bbf0", "0x4209895ffef00bfc",
    "0x2bf56e4e8b9628e3", "0x977eeca95d919f44", "0x5d308377fb7d5a49", "0xc05f3158cc3a1c98", "0xc3161ef16a5df467",
    "0x7a4b9c1c6ca931c5", "0x9c0b8968d427bca1", "0x1ccd501e8e1eb46",  "0xa442344e50b458de", "0xd4b66d8d4b59213",
    "0x9c34acbaac050c48", "0xed456d99ad122ee9", "0x2480e218a0a79547", "0x391531ec020eddb6", "0x9d88b6a526385791",
    "0xe83ea68627ead11d", "0x596f7aaab1bd3c4",  "0x1b54bf08f680cc3a", "0x1e0adfe5a7691a37", "0x5835b5c5bd242eef",
    "0x6b4166a1ac848543", "0x157050c069a612e1", "0x3cad0b28d0dc405",  "0x86a1c6ffc30b5366", "0xe5c4c673028d9eb7",
    "0x2aa0959e65bf3d88", "0x9689b17dea4ffab4", "0x9f33b26c0c29d748", "0x92dba3d9a7c6cc2b", "0x64b1ffde84e0be8e",
    "0x497e2fefcd9c123b", "0x38941e2c91de4a6",  "0x46bace39adf392ae", "0xc6cdb4f961fe5d40", "0xe78d7eca4614b50f",
    "0x80921c1dfac1f1a",  "0xd02e64dbe2a9e171", "0xdfd692b97654269b", "0xb5e89b1ae4d73426", "0xabb2af48fc4e6386",
    "0x90c7614f5262f6d0", "0x762ac2506830bc09", "0xb9610ada762a35ac", "0x720617d63864a661"};

  static const std::string mds_matrix_24[] = {
    "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0xa", "0xe", "0x2", "0x6", "0x5", "0x7", "0x1", "0x3", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2", "0x4", "0x6", "0x1", "0x1",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x2", "0x6", "0xa", "0xe", "0x1", "0x3", "0x5", "0x7", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc", "0x1", "0x1", "0x4", "0x6",
    "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3",
    "0x5", "0x7", "0x1", "0x3", "0xa", "0xe", "0x2", "0x6", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1",
    "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x8", "0xc", "0x2", "0x2",
    "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7", "0x1", "0x3", "0x5", "0x7",
    "0x1", "0x3", "0x5", "0x7", "0x2", "0x6", "0xa", "0xe", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6",
    "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x1", "0x1", "0x4", "0x6", "0x2", "0x2", "0x8", "0xc"};

  static const std::string partial_matrix_diagonal_24[] = {
    "0xcb56c8ce93e39607", "0x127b379308c37bca", "0x52ce0edf82511936", "0x7fee7ff158786bb0", "0x3c0b3b0262815f10",
    "0x7471b11727b23870", "0x39b998a13ce1e476", "0xfad3443c1b0bbac6", "0xf9a99a7f8956b49c", "0x18d55a8454590289",
    "0xa097fa0db154de2e", "0x86b7e3dd0a5e4f2f", "0xe8f6454e1ef1c6d5", "0xdd5a63c27e835ae",  "0x45e1cdcc2b23e61b",
    "0x4225478b0f8b84a2", "0xbfd4e1d887b7b86",  "0xbc8cda51935c116",  "0xa1ba3b4cb5010658", "0xc9a787e779b51049",
    "0x1237041932150341", "0x41e9dd1bbaca11e2", "0x25a1b17d37fa5dd6", "0xe2317047a667d46"};

} // namespace poseidon2_constants_goldilocks
#endif
