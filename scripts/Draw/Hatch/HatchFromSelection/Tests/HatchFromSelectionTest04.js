/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest04.js
// Timestamp   : 2011-08-16 15:17:49
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function HatchFromSelectionTest04() {
    TdbTest.call(this, 'scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest04.js');
}

HatchFromSelectionTest04.prototype = new TdbTest();

HatchFromSelectionTest04.prototype.test00 = function() {
    qDebug('running HatchFromSelectionTest04.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(20, 435), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(20, 435), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Draw/Hatch/HatchFromSelection/Tests/data/contour.dxf');
    this.selectAll();
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Type', 'HatchPattern')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Pattern', 'ANSI33')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Scale',  [ 1.4, 0 ] )");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Angle',  [ 0, 0 ] )");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    this.clickOnWidget('MainWindow::MainToolsPanel::HatchToolsPanelButton');
    this.clickOnWidget('MainWindow::HatchToolsPanel::HatchFromSelectionButton');
    this.verifyDrawing('HatchFromSelectionTest04_000.dxf');
    this.tearDown();
    qDebug('finished HatchFromSelectionTest04.test00()');
};

