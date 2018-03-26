cmake_minimum_required(VERSION 3.9)
project(LorenzAttraktor)

set(CMAKE_CXX_STANDARD 14)

# ==============================================================================
# Compiler config
# ==============================================================================
set(GCC_COVERAGE_COMPILE_FLAGS "-fexceptions -fpermissive -fprofile-arcs -ftest-coverage -fPIC")
set(GCC_COVERAGE_LINK_FLAGS "-lgcov -lpthread")

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${GCC_COVERAGE_COMPILE_FLAGS}")
set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${GCC_COVERAGE_LINK_FLAGS}")

# ==============================================================================
# Project config
# ==============================================================================

# The source container names
set(SOURCE_DIR ${PROJECT_SOURCE_DIR}/src)
set(TEST_DIR ${PROJECT_SOURCE_DIR}/test)
set(LIB_DIR ${PROJECT_SOURCE_DIR}/lib)

# Set the CPP files which should be compiled
set(SOURCE_FILES src/graphics.cpp)
set(TEST_FILES test/main.cpp)

# ==============================================================================
# Boost config
# ==============================================================================
set(Boost_USE_STATIC_LIBS ON)
set(Boost_USE_MULTITHREADED ON)
set(Boost_USE_STATIC_RUNTIME OFF)

find_package(Boost 1.62 REQUIRED)

set(SRC_INCLUDE_DIRS "${SRC_INCLUDE_DIRS}" "${Boost_INCLUDE_DIRS}")
set(SRC_INCLUDE_LIBS "${SRC_INCLUDE_LIBS}" "${Boost_LIBRARIES}")

# ==============================================================================
# OpenGL related config
# ==============================================================================

find_package(OpenGL REQUIRED)
find_package(GLUT REQUIRED)
set(SRC_INCLUDE_DIRS "${SRC_INCLUDE_DIRS}" "${OPENGL_INCLUDE_DIRS}" "${GLUT_INCLUDE_DIRS}")
set(SRC_INCLUDE_LIBS "${SRC_INCLUDE_LIBS}" "${OPENGL_LIBRARIES}" "${GLUT_LIBRARY}")

if(NOT OPENGL_FOUND)
    message(ERROR " OPENGL not found!")
endif(NOT OPENGL_FOUND)

# ==============================================================================
# Link Libraries
# ==============================================================================

message(STATUS " Included directories:  ${SRC_INCLUDE_DIRS}")
message(STATUS " Included libraries: ${SRC_INCLUDE_LIBS}")

add_library(SRC ${SOURCE_FILES})
target_include_directories(SRC PRIVATE ${SRC_INCLUDE_DIRS})
target_link_libraries(SRC PRIVATE ${SRC_INCLUDE_LIBS} )

# ==============================================================================
# Link Program
# ==============================================================================

target_include_directories(SRC PRIVATE ${SOURCE_DIR} ${LIB_DIR})

# Link Tests
add_executable(unit-test ${LIB_DIR}/catch-1.10.h ${TEST_FILES})
target_include_directories(unit-test PRIVATE ${SRC_DIR} ${LIB_DIR} ${TEST_DIR})
target_link_libraries(unit-test PRIVATE SRC)
# set_target_properties(unit-test PROPERTIES LINKER_LANGUAGE CXX)

# add_test(integration_test COMMAND unit-test)

# Executable
add_executable(LorenzAttraktor main.cpp)
target_include_directories(LorenzAttraktor PRIVATE ${SRC_DIR})
target_link_libraries(LorenzAttraktor PRIVATE SRC)