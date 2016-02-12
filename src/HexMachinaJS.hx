package;

import hex.HexCoreSuite;
import hex.HexInjectSuite;
import hex.HexMVCSuite;
import hex.HexIoCSuite;
import hex.HexUnitSuite;
import hex.domain.Domain;
import hex.state.HexStateSuite;
import hex.unittest.notifier.BrowserUnitTestNotifier;
import hex.unittest.runner.ExMachinaUnitCore;

class HexMachinaJS
{
    static public function main() : Void
    {
		var emu : ExMachinaUnitCore = new ExMachinaUnitCore();

        emu.addListener( new BrowserUnitTestNotifier( "console" ) );
        //emu.addListener( new WebSocketNotifier( "ws://127.0.0.1:6660/" ) );
		
		emu.addTest( HexMVCSuite );
		emu.addTest( HexCoreSuite );
        emu.addTest( HexInjectSuite );
        emu.addTest( HexIoCSuite );
        emu.addTest( HexUnitSuite );
		emu.addTest( HexStateSuite );
		
		//emu.addTestMethod( ObjectXMLParserTest, "testFilePreprocessor" );
		//emu.addTestMethod( ApplicationAssemblerTest, "testAddConditionalProperty" );
		//emu.addTestMethod( ApplicationAssemblerTest, "testStrictMode" );
        emu.run();
		
		/*var proxy : LogProxyLayout = new LogProxyLayout();
		proxy.addListener( new SimpleBrowserLayout() );
		proxy.filter( null, JasminDomain.DOMAIN );
		
		Logger.getInstance().setLevel( LogLevel.DEBUG );
		
		Logger.DEBUG( "hola mundo " );
		Logger.INFO( "hola mundo ", JasminDomain.DOMAIN );
		Logger.WARN( "hola mundo ", JasminDomain.DOMAIN  );
		Logger.ERROR( "hola mundo", DoclerDomain.DOMAIN );
		Logger.FATAL( "hola mundo", JasminDomain.DOMAIN );*/
	}
}


class JasminDomain extends Domain
{
    public static var DOMAIN : JasminDomain = new JasminDomain( "Jasmin" );
}

class DoclerDomain extends Domain
{
    public static var DOMAIN : DoclerDomain = new DoclerDomain( "Docler" );
}