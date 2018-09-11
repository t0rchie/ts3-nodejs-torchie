module.exports = {
  channellist: [{
    cid: 1,
    pid: 0,
    channel_order: 0,
    channel_name: "Channel 1",
    channel_topic: "",
    channel_flag_default: 1,
    channel_flag_password: 0,
    channel_flag_permanent: 1,
    channel_flag_semi_permanent: 0,
    channel_codec: 4,
    channel_codec_quality: 6,
    channel_needed_talk_power: 0,
    channel_icon_id: 0,
    seconds_empty: -1,
    total_clients_family: 2,
    channel_maxclients: -1,
    channel_maxfamilyclients: -1,
    total_clients: 2,
    channel_needed_subscribe_power: 0
  }, {
    cid: 2,
    pid: 0,
    channel_order: 1,
    channel_name: "Channel 2",
    channel_topic: "",
    channel_flag_default: 0,
    channel_flag_password: 0,
    channel_flag_permanent: 1,
    channel_flag_semi_permanent: 0,
    channel_codec: 4,
    channel_codec_quality: 6,
    channel_needed_talk_power: 0,
    channel_icon_id: 0,
    seconds_empty: 25,
    total_clients_family: 0,
    channel_maxclients: -1,
    channel_maxfamilyclients: -1,
    total_clients: 0,
    channel_needed_subscribe_power: 0
  }, {
    cid: 3,
    pid: 0,
    channel_order: 2,
    channel_name: "Channel 3",
    channel_topic: "",
    channel_flag_default: 0,
    channel_flag_password: 0,
    channel_flag_permanent: 1,
    channel_flag_semi_permanent: 0,
    channel_codec: 4,
    channel_codec_quality: 6,
    channel_needed_talk_power: 0,
    channel_icon_id: 0,
    seconds_empty: 18,
    total_clients_family: 0,
    channel_maxclients: -1,
    channel_maxfamilyclients: -1,
    total_clients: 0,
    channel_needed_subscribe_power: 0
  }],


  clientlist: [{
    clid: 2,
    cid: 1,
    client_database_id: 1,
    client_nickname: "serveradmin from [::1]:53570",
    client_type: 1,
    client_away: 0,
    client_away_message: "",
    client_flag_talking: 0,
    client_input_muted: 0,
    client_output_muted: 0,
    client_input_hardware: 0,
    client_output_hardware: 0,
    client_talk_power: 0,
    client_is_talker: 0,
    client_is_priority_speaker: 0,
    client_is_recording: 0,
    client_is_channel_commander: 0,
    client_unique_identifier: "serveradmin",
    client_servergroups: 2,
    client_channel_group_id: 8,
    client_channel_group_inherited_channel_id: 1,
    client_version: "ServerQuery",
    client_platform: "ServerQuery",
    client_idle_time: 32019,
    client_created: 0,
    client_lastconnected: 0,
    client_icon_id: 0,
    client_country: ""
  }, {
    clid: 3,
    cid: 1,
    client_database_id: 4,
    client_nickname: "Multivitamin | David",
    client_type: 0,
    client_away: 0,
    client_away_message: "",
    client_flag_talking: 0,
    client_input_muted: 0,
    client_output_muted: 0,
    client_input_hardware: 1,
    client_output_hardware: 1,
    client_talk_power: 75,
    client_is_talker: 0,
    client_is_priority_speaker: 0,
    client_is_recording: 0,
    client_is_channel_commander: 0,
    client_unique_identifier: "NF61yPIiDvYuOJ/Bbeod84bw6dE=",
    client_servergroups: [2,6],
    client_channel_group_id: 8,
    client_channel_group_inherited_channel_id: 1,
    client_version: "3.2.1 [Build: 1534255236]",
    client_platform: "Windows",
    client_idle_time: 922332,
    client_created: 1535478249,
    client_lastconnected: 1536700781,
    client_icon_id: 0,
    client_country: "AT"
  }],


  servergrouplist: [{
    sgid: 1,
    name: "Guest Server Query",
    type: 2,
    iconid: 0,
    savedb: 0,
    sortid: 0,
    namemode: 0,
    n_modifyp: 100,
    n_member_addp: 0,
    n_member_removep: 0,
  }, {
    sgid: 2,
    name: "Admin Server Query",
    type: 2,
    iconid: 500,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 100,
    n_member_addp: 100,
    n_member_removep: 100,
  }, {
    sgid: 3,
    name: "Server Admin",
    type: 0,
    iconid: 300,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 75,
    n_member_removep: 75,
  }, {
    sgid: 4,
    name: "Normal",
    type: 0,
    iconid: 0,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 60,
    n_member_removep: 60,
  }, {
    sgid: 5,
    name: "Guest",
    type: 0,
    iconid: 0,
    savedb: 0,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 0,
    n_member_removep: 0,
  }, {
    sgid: 6,
    name: "Server Admin",
    type: 1,
    iconid: 300,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 75,
    n_member_removep: 75,
  }, {
    sgid: 7,
    name: "Normal",
    type: 1,
    iconid: 0,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 60,
    n_member_removep: 60,
  }, {
    sgid: 8,
    name: "Guest",
    type: 1,
    iconid: 0,
    savedb: 0,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 0,
    n_member_removep: 0,
  }],


  channelgrouplist: [{
    cgid: 5,
    name: "Channel Admin",
    type: 1,
    iconid: 100,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 50,
    n_member_removep: 50,
  }, {
    cgid: 6,
    name: "Operator",
    type: 1,
    iconid: 200,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 30,
    n_member_removep: 30,
  }, {
    cgid: 7,
    name: "Voice",
    type: 1,
    iconid: 600,
    savedb: 1,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 25,
    n_member_removep: 25,
  }, {
    cgid: 8,
    name: "Guest",
    type: 1,
    iconid: 0,
    savedb: 0,
    sortid: 0,
    namemode: 0,
    n_modifyp: 75,
    n_member_addp: 0,
    n_member_removep: 0,
  }]
}
