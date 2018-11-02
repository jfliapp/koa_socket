// socket.io
Socket {
  nsp: Namespace {
    name: '/chat',
    server: Server {
      nsps: [Object],
      parentNsps: Map {},
      _path: '/socket.io',
      _serveClient: true,
      parser: [Object],
      encoder: Encoder {},
      _adapter: [Function: Adapter],
      _origins: '*:*',
      sockets: [Object],
      eio: [Object],
      httpServer: [Object],
      engine: [Object]
    },
    sockets: {
      '/chat#58exSJIyyx1JxeLaAAAA': [Object],
      '/chat#xcZgMzEdIaVDy-1QAAAB': [Object],
      '/chat#TFHxdvHTky3ESs0XAAAC': [Circular]
    },
    connected: {
      '/chat#58exSJIyyx1JxeLaAAAA': [Object],
      '/chat#xcZgMzEdIaVDy-1QAAAB': [Object],
      '/chat#TFHxdvHTky3ESs0XAAAC': [Circular]
    },
    fns: [],
    ids: 0,
    rooms: [],
    flags: {},
    adapter: Adapter {
      nsp: [Circular],
      rooms: [Object],
      sids: [Object],
      encoder: Encoder {}
    },
    _events: {
      connection: [Function]
    },
    _eventsCount: 1
  },
  server: Server {
    nsps: {
      '/': [Object],
      '/chat': [Object],
      '/news': [Object]
    },
    parentNsps: Map {},
    _path: '/socket.io',
    _serveClient: true,
    parser: {
      protocol: 4,
      types: [Array],
      CONNECT: 0,
      DISCONNECT: 1,
      EVENT: 2,
      ACK: 3,
      ERROR: 4,
      BINARY_EVENT: 5,
      BINARY_ACK: 6,
      Encoder: [Function: Encoder],
      Decoder: [Function: Decoder]
    },
    encoder: Encoder {},
    _adapter: [Function: Adapter],
    _origins: '*:*',
    sockets: Namespace {
      name: '/',
      server: [Circular],
      sockets: [Object],
      connected: [Object],
      fns: [],
      ids: 0,
      rooms: [],
      flags: {},
      adapter: [Object],
      _events: [Object],
      _eventsCount: 1
    },
    eio: Server {
      clients: [Object],
      clientsCount: 3,
      wsEngine: 'ws',
      pingTimeout: 5000,
      pingInterval: 25000,
      upgradeTimeout: 10000,
      maxHttpBufferSize: 100000000,
      transports: [Array],
      allowUpgrades: true,
      allowRequest: [Function: bound],
      cookie: 'io',
      cookiePath: '/',
      cookieHttpOnly: true,
      perMessageDeflate: [Object],
      httpCompression: [Object],
      initialPacket: [Array],
      ws: [Object],
      _events: [Object],
      _eventsCount: 1
    },
    httpServer: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 5,
      _maxListeners: undefined,
      _connections: 4,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      _pendingResponseData: 0,
      maxHeadersCount: null,
      _connectionKey: '6::::8080',
      [Symbol(asyncId)]: 7
    },
    engine: Server {
      clients: [Object],
      clientsCount: 3,
      wsEngine: 'ws',
      pingTimeout: 5000,
      pingInterval: 25000,
      upgradeTimeout: 10000,
      maxHttpBufferSize: 100000000,
      transports: [Array],
      allowUpgrades: true,
      allowRequest: [Function: bound],
      cookie: 'io',
      cookiePath: '/',
      cookieHttpOnly: true,
      perMessageDeflate: [Object],
      httpCompression: [Object],
      initialPacket: [Array],
      ws: [Object],
      _events: [Object],
      _eventsCount: 1
    }
  },
  adapter: Adapter {
    nsp: Namespace {
      name: '/chat',
      server: [Object],
      sockets: [Object],
      connected: [Object],
      fns: [],
      ids: 0,
      rooms: [],
      flags: {},
      adapter: [Circular],
      _events: [Object],
      _eventsCount: 1
    },
    rooms: {
      '/chat#58exSJIyyx1JxeLaAAAA': [Object],
      '/chat#xcZgMzEdIaVDy-1QAAAB': [Object],
      '/chat#TFHxdvHTky3ESs0XAAAC': [Object]
    },
    sids: {
      '/chat#58exSJIyyx1JxeLaAAAA': [Object],
      '/chat#xcZgMzEdIaVDy-1QAAAB': [Object],
      '/chat#TFHxdvHTky3ESs0XAAAC': [Object]
    },
    encoder: Encoder {}
  },
  id: '/chat#TFHxdvHTky3ESs0XAAAC',
  client: Client {
    server: Server {
      nsps: [Object],
      parentNsps: Map {},
      _path: '/socket.io',
      _serveClient: true,
      parser: [Object],
      encoder: Encoder {},
      _adapter: [Function: Adapter],
      _origins: '*:*',
      sockets: [Object],
      eio: [Object],
      httpServer: [Object],
      engine: [Object]
    },
    conn: Socket {
      id: 'TFHxdvHTky3ESs0XAAAC',
      server: [Object],
      upgrading: false,
      upgraded: false,
      readyState: 'open',
      writeBuffer: [Array],
      packetsFn: [],
      sentCallbackFn: [],
      cleanupFn: [Array],
      request: [Object],
      remoteAddress: '::1',
      checkIntervalTimer: null,
      upgradeTimeoutTimer: null,
      pingTimeoutTimer: [Object],
      transport: [Object],
      _events: [Object],
      _eventsCount: 3
    },
    encoder: Encoder {},
    decoder: Decoder {
      reconstructor: null,
      _callbacks: [Object]
    },
    id: 'TFHxdvHTky3ESs0XAAAC',
    request: IncomingMessage {
      _readableState: [Object],
      readable: false,
      domain: null,
      _events: {},
      _eventsCount: 0,
      _maxListeners: undefined,
      socket: [Object],
      connection: [Object],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      upgrade: false,
      url: '/socket.io/?EIO=3&transport=polling&t=MR41fKV',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: [Object],
      _consuming: true,
      _dumped: true,
      _query: [Object],
      res: [Object],
      cleanup: [Function: cleanup],
      read: [Function]
    },
    onclose: [Function: bound],
    ondata: [Function: bound],
    onerror: [Function: bound],
    ondecoded: [Function: bound],
    sockets: {
      TFHxdvHTky3ESs0XAAAC: [Object],
      '/chat#TFHxdvHTky3ESs0XAAAC': [Circular]
    },
    nsps: {
      '/': [Object],
      '/chat': [Circular]
    },
    connectBuffer: []
  },
  conn: Socket {
    id: 'TFHxdvHTky3ESs0XAAAC',
    server: Server {
      clients: [Object],
      clientsCount: 3,
      wsEngine: 'ws',
      pingTimeout: 5000,
      pingInterval: 25000,
      upgradeTimeout: 10000,
      maxHttpBufferSize: 100000000,
      transports: [Array],
      allowUpgrades: true,
      allowRequest: [Function: bound],
      cookie: 'io',
      cookiePath: '/',
      cookieHttpOnly: true,
      perMessageDeflate: [Object],
      httpCompression: [Object],
      initialPacket: [Array],
      ws: [Object],
      _events: [Object],
      _eventsCount: 1
    },
    upgrading: false,
    upgraded: false,
    readyState: 'open',
    writeBuffer: [
      [Object]
    ],
    packetsFn: [],
    sentCallbackFn: [],
    cleanupFn: [
      [Function],
      [Function]
    ],
    request: IncomingMessage {
      _readableState: [Object],
      readable: false,
      domain: null,
      _events: {},
      _eventsCount: 0,
      _maxListeners: undefined,
      socket: [Object],
      connection: [Object],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      upgrade: false,
      url: '/socket.io/?EIO=3&transport=polling&t=MR41fKV',
      method: 'GET',
      statusCode: null,
      statusMessage: null,
      client: [Object],
      _consuming: true,
      _dumped: true,
      _query: [Object],
      res: [Object],
      cleanup: [Function: cleanup],
      read: [Function]
    },
    remoteAddress: '::1',
    checkIntervalTimer: null,
    upgradeTimeoutTimer: null,
    pingTimeoutTimer: Timeout {
      _called: false,
      _idleTimeout: 30000,
      _idlePrev: [Object],
      _idleNext: [Object],
      _idleStart: 1952,
      _onTimeout: [Function],
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: false,
      [Symbol(asyncId)]: 143,
      [Symbol(triggerAsyncId)]: 142
    },
    transport: XHR {
      readyState: 'open',
      discarded: false,
      closeTimeout: 30000,
      maxHttpBufferSize: 100000000,
      httpCompression: [Object],
      supportsBinary: true,
      _events: [Object],
      _eventsCount: 5,
      sid: 'TFHxdvHTky3ESs0XAAAC',
      req: null,
      res: null,
      writable: false,
      dataReq: null,
      dataRes: null
    },
    _events: {
      close: [Array],
      data: [Function: bound],
      error: [Function: bound]
    },
    _eventsCount: 3
  },
  rooms: {},
  acks: {},
  connected: true,
  disconnected: false,
  handshake: {
    headers: {
      host: 'localhost:8080',
      connection: 'keep-alive',
      accept: '*/*',
      origin: 'null',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      cookie: '_ga=GA1.1.417626536.1526980838; UM_distinctid=1655b227aa6b47-0ac72552d7f88c-2d604637-3d10d-1655b227aa75be; CNZZDATA1274372955=1976723048-1534827530-null%7C1534930062; CNZZDATA1274428632=904178047-1534985537-null%7C1534985537; _pk_id.38.1fff=d10d9c37f3a1c0b3.1534758000.14.1535353096.1535352966.; io=58exSJIyyx1JxeLaAAAA'
    },
    time: 'Tue Oct 30 2018 16:10:57 GMT+0800 (中国标准时间)',
    address: '::1',
    xdomain: true,
    secure: false,
    issued: 1540887057732,
    url: '/socket.io/?EIO=3&transport=polling&t=MR41fKV',
    query: {
      EIO: '3',
      transport: 'polling',
      t: 'MR41fKV'
    }
  },
  fns: [],
  flags: {},
  _rooms: []
}

// websocket

{
  server: {
    [Function: WebSocketServer]
    super_: {
      [Function: EventEmitter]
      EventEmitter: [Circular],
      usingDomains: false,
      defaultMaxListeners: [Getter / Setter],
      init: [Function],
      listenerCount: [Function]
    }
  },
  client: {
    [Function: WebSocketClient]
    super_: {
      [Function: EventEmitter]
      EventEmitter: [Circular],
      usingDomains: false,
      defaultMaxListeners: [Getter / Setter],
      init: [Function],
      listenerCount: [Function]
    }
  },
  router: {
    [Function: WebSocketRouter]
    super_: {
      [Function: EventEmitter]
      EventEmitter: [Circular],
      usingDomains: false,
      defaultMaxListeners: [Getter / Setter],
      init: [Function],
      listenerCount: [Function]
    }
  },
  frame: [Function: WebSocketFrame],
  request: {
    [Function: WebSocketRequest]
    super_: {
      [Function: EventEmitter]
      EventEmitter: [Circular],
      usingDomains: false,
      defaultMaxListeners: [Getter / Setter],
      init: [Function],
      listenerCount: [Function]
    }
  },
  connection: {
    [Function: WebSocketConnection]
    CLOSE_REASON_NORMAL: 1000,
    CLOSE_REASON_GOING_AWAY: 1001,
    CLOSE_REASON_PROTOCOL_ERROR: 1002,
    CLOSE_REASON_UNPROCESSABLE_INPUT: 1003,
    CLOSE_REASON_RESERVED: 1004,
    CLOSE_REASON_NOT_PROVIDED: 1005,
    CLOSE_REASON_ABNORMAL: 1006,
    CLOSE_REASON_INVALID_DATA: 1007,
    CLOSE_REASON_POLICY_VIOLATION: 1008,
    CLOSE_REASON_MESSAGE_TOO_BIG: 1009,
    CLOSE_REASON_EXTENSION_REQUIRED: 1010,
    CLOSE_REASON_INTERNAL_SERVER_ERROR: 1011,
    CLOSE_REASON_TLS_HANDSHAKE_FAILED: 1015,
    CLOSE_DESCRIPTIONS: {
      '1000': 'Normal connection closure',
      '1001': 'Remote peer is going away',
      '1002': 'Protocol error',
      '1003': 'Unprocessable input',
      '1004': 'Reserved',
      '1005': 'Reason not provided',
      '1006': 'Abnormal closure, no further detail available',
      '1007': 'Invalid data received',
      '1008': 'Policy violation',
      '1009': 'Message too big',
      '1010': 'Extension requested by client is required',
      '1011': 'Internal Server Error',
      '1015': 'TLS Handshake Failed'
    },
    super_: {
      [Function: EventEmitter]
      EventEmitter: [Circular],
      usingDomains: false,
      defaultMaxListeners: [Getter / Setter],
      init: [Function],
      listenerCount: [Function]
    }
  },
  w3cwebsocket: [Function: W3CWebSocket],
  deprecation: {
    disableWarnings: false,
    deprecationWarningMap: {},
    warn: [Function: warn]
  },
  version: '1.0.28'
}

// io 里面的值
Server {
  nsps: {
    '/': Namespace {
      name: '/',
      server: [Circular],
      sockets: {},
      connected: {},
      fns: [],
      ids: 0,
      rooms: [],
      flags: {},
      adapter: [Object]
    }
  },
  parentNsps: Map {},
  _path: '/socket.io',
  _serveClient: true,
  parser: {
    protocol: 4,
    types: ['CONNECT',
      'DISCONNECT',
      'EVENT',
      'ACK',
      'ERROR',
      'BINARY_EVENT',
      'BINARY_ACK'
    ],
    CONNECT: 0,
    DISCONNECT: 1,
    EVENT: 2,
    ACK: 3,
    ERROR: 4,
    BINARY_EVENT: 5,
    BINARY_ACK: 6,
    Encoder: [Function: Encoder],
    Decoder: [Function: Decoder]
  },
  encoder: Encoder {},
  _adapter: [Function: Adapter],
  _origins: '*:*',
  sockets: Namespace {
    name: '/',
    server: [Circular],
    sockets: {},
    connected: {},
    fns: [],
    ids: 0,
    rooms: [],
    flags: {},
    adapter: Adapter {
      nsp: [Circular],
      rooms: {},
      sids: {},
      encoder: Encoder {}
    }
  },
  eio: Server {
    clients: {},
    clientsCount: 0,
    wsEngine: 'ws',
    pingTimeout: 5000,
    pingInterval: 25000,
    upgradeTimeout: 10000,
    maxHttpBufferSize: 100000000,
    transports: ['polling', 'websocket'],
    allowUpgrades: true,
    allowRequest: [Function: bound],
    cookie: 'io',
    cookiePath: '/',
    cookieHttpOnly: true,
    perMessageDeflate: {
      threshold: 1024
    },
    httpCompression: {
      threshold: 1024
    },
    initialPacket: ['0'],
    ws: WebSocketServer {
      domain: null,
      _events: {},
      _eventsCount: 0,
      _maxListeners: undefined,
      options: [Object]
    },
    _events: {
      connection: [Function: bound]
    },
    _eventsCount: 1
  },
  httpServer: Server {
    domain: null,
    _events: {
      connection: [Function: connectionListener],
      close: [Function: bound],
      listening: [Function: bound],
      upgrade: [Function],
      request: [Function]
    },
    _eventsCount: 5,
    _maxListeners: undefined,
    _connections: 0,
    _handle: null,
    _usingSlaves: false,
    _slaves: [],
    _unref: false,
    allowHalfOpen: true,
    pauseOnConnect: false,
    httpAllowHalfOpen: false,
    timeout: 120000,
    keepAliveTimeout: 5000,
    _pendingResponseData: 0,
    maxHeadersCount: null,
    [Symbol(asyncId)]: -1
  },
  engine: Server {
    clients: {},
    clientsCount: 0,
    wsEngine: 'ws',
    pingTimeout: 5000,
    pingInterval: 25000,
    upgradeTimeout: 10000,
    maxHttpBufferSize: 100000000,
    transports: ['polling', 'websocket'],
    allowUpgrades: true,
    allowRequest: [Function: bound],
    cookie: 'io',
    cookiePath: '/',
    cookieHttpOnly: true,
    perMessageDeflate: {
      threshold: 1024
    },
    httpCompression: {
      threshold: 1024
    },
    initialPacket: ['0'],
    ws: WebSocketServer {
      domain: null,
      _events: {},
      _eventsCount: 0,
      _maxListeners: undefined,
      options: [Object]
    },
    _events: {
      connection: [Function: bound]
    },
    _eventsCount: 1
  }
}


//io.sockets 里面
Namespace {
  name: '/',
  server: Server {
    nsps: {
      '/': [Circular],
      '/chat': [Object],
      '/news': [Object]
    },
    parentNsps: Map {},
    _path: '/socket.io',
    _serveClient: true,
    parser: {
      protocol: 4,
      types: [Array],
      CONNECT: 0,
      DISCONNECT: 1,
      EVENT: 2,
      ACK: 3,
      ERROR: 4,
      BINARY_EVENT: 5,
      BINARY_ACK: 6,
      Encoder: [Function: Encoder],
      Decoder: [Function: Decoder]
    },
    encoder: Encoder {},
    _adapter: [Function: Adapter],
    _origins: '*:*',
    sockets: [Circular],
    eio: Server {
      clients: [Object],
      clientsCount: 2,
      wsEngine: 'ws',
      pingTimeout: 5000,
      pingInterval: 25000,
      upgradeTimeout: 10000,
      maxHttpBufferSize: 100000000,
      transports: [Array],
      allowUpgrades: true,
      allowRequest: [Function: bound],
      cookie: 'io',
      cookiePath: '/',
      cookieHttpOnly: true,
      perMessageDeflate: [Object],
      httpCompression: [Object],
      ws: [Object],
      _events: [Object],
      _eventsCount: 1
    },
    httpServer: Server {
      domain: null,
      _events: [Object],
      _eventsCount: 5,
      _maxListeners: undefined,
      _connections: 3,
      _handle: [Object],
      _usingSlaves: false,
      _slaves: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      httpAllowHalfOpen: false,
      timeout: 120000,
      keepAliveTimeout: 5000,
      _pendingResponseData: 0,
      maxHeadersCount: null,
      _connectionKey: '6::::8080',
      [Symbol(asyncId)]: 7
    },
    engine: Server {
      clients: [Object],
      clientsCount: 2,
      wsEngine: 'ws',
      pingTimeout: 5000,
      pingInterval: 25000,
      upgradeTimeout: 10000,
      maxHttpBufferSize: 100000000,
      transports: [Array],
      allowUpgrades: true,
      allowRequest: [Function: bound],
      cookie: 'io',
      cookiePath: '/',
      cookieHttpOnly: true,
      perMessageDeflate: [Object],
      httpCompression: [Object],
      ws: [Object],
      _events: [Object],
      _eventsCount: 1
    }
  },
  sockets: {
    NNeYrTGsUNzlSWsaAAAA: Socket {
      nsp: [Circular],
      server: [Object],
      adapter: [Object],
      id: 'NNeYrTGsUNzlSWsaAAAA',
      client: [Object],
      conn: [Object],
      rooms: [Object],
      acks: {},
      connected: true,
      disconnected: false,
      handshake: [Object],
      fns: [],
      flags: {},
      _rooms: [],
      _events: [Object],
      _eventsCount: 2
    },
    ntrafI5v9HIv1VCBAAAB: Socket {
      nsp: [Circular],
      server: [Object],
      adapter: [Object],
      id: 'ntrafI5v9HIv1VCBAAAB',
      client: [Object],
      conn: [Object],
      rooms: {},
      acks: {},
      connected: true,
      disconnected: false,
      handshake: [Object],
      fns: [],
      flags: {},
      _rooms: []
    }
  },
  connected: {
    NNeYrTGsUNzlSWsaAAAA: Socket {
      nsp: [Circular],
      server: [Object],
      adapter: [Object],
      id: 'NNeYrTGsUNzlSWsaAAAA',
      client: [Object],
      conn: [Object],
      rooms: [Object],
      acks: {},
      connected: true,
      disconnected: false,
      handshake: [Object],
      fns: [],
      flags: {},
      _rooms: [],
      _events: [Object],
      _eventsCount: 2
    },
    ntrafI5v9HIv1VCBAAAB: Socket {
      nsp: [Circular],
      server: [Object],
      adapter: [Object],
      id: 'ntrafI5v9HIv1VCBAAAB',
      client: [Object],
      conn: [Object],
      rooms: {},
      acks: {},
      connected: true,
      disconnected: false,
      handshake: [Object],
      fns: [],
      flags: {},
      _rooms: []
    }
  },
  fns: [
    [Function]
  ],
  ids: 0,
  rooms: [],
  flags: {},
  adapter: Adapter {
    nsp: [Circular],
    rooms: {
      NNeYrTGsUNzlSWsaAAAA: [Object],
      ntrafI5v9HIv1VCBAAAB: [Object]
    },
    sids: {
      NNeYrTGsUNzlSWsaAAAA: [Object],
      ntrafI5v9HIv1VCBAAAB: [Object]
    },
    encoder: Encoder {}
  },
  _events: {
    connection: [Function]
  },
  _eventsCount: 1
}